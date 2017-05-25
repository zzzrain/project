<template>
	<div class="reviews">
		<a v-for="key in reviews" :href="key.alt" v-show="bool" class="detail">
			<h3 v-text="key.title"></h3>
			<p v-text="key.author.name"></p>
			<p v-text="key.summary"></p>
			<p>
				<span>顶：</span>
				<span v-text="key.useful_count"></span>
				<span>踩：</span>
				<span v-text="key.useless_count"></span>
			</p>
		</a>
		<div class="showmore" @click="showmore()" v-show="bool">查看更多</div>
		<!--<div class="load" v-show='load'>
		  	<mu-circular-progress :size="60" :strokeWidth="5" color="plum"/>
		</div>-->
	</div>
</template>

<script>
	export default {
		data () {
			return {
				reviews:[],
				count:5,
				bool:false,
			}
		},
		mounted (){
			this.showmore()
		},
		methods: {
			showmore(){
				var src = window.location.hash.slice(8)
				console.log(src)
				$.ajax({
					type: 'get',
					url: 'http://api.douban.com/v2/movie/subject/' + src,
					data: {
						apikey: '0b2bdeda43b5688921839c8ecb20399b',
						count: this.count,
					},
					dataType: 'jsonp',
					success: function(data) {
						console.log(data)
						this.reviews = data.reviews
						this.count += 5
						this.bool = true
					}.bind(this)
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.reviews{
		padding: 20px;
		.detail{
			padding-bottom: 10px;
			display: block;
			color: #000;
		}
	}

	.showmore{
		text-align: center;
		line-height: 60px;
		color: plum;
		font-size: 1.5em;
		font-family: "微软雅黑";
	}
</style>