<template>
	<div class="comments">
		<div v-for="key in comments" v-show="bool" class="info">
			<a class="user" :href="key.author.alt"><img :src="key.author.avatar" alt="" /></a>
			<div class="text">
				<p v-text="key.author.name"></p>
				<p class="icon"><mu-icon value="thumb_up" color="orange"/></p>
				<p v-text="key.useful_count" class="count"></p>
				<p v-text="key.content"></p>
				<p v-text="key.created_at"></p>
			</div>
		</div>
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
				comments:[],
				count:10,
				bool:false,
			}
		},
		mounted (){
			this.showmore()
		},
		methods:{
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
						this.comments = data.comments
						this.count += 10
						this.bool = true
					}.bind(this)
				})
			}
		}
		
	}
</script>

<style scoped>
	.comments{
		padding: 20px;
		overflow: hidden;
	}
	.load {
		position: absolute;
		left: 50%;
		margin-left: -30px;
	}
	.info{
		overflow: hidden;
		border-bottom: 1px solid #eee;
		margin-bottom: 10px;
	}
	.user{
		display: block;
		float: left;
	}
	.user img{
		border-radius: 50%;
	}
	.text{
		float: left;
		overflow: hidden;
		width: 80%;
		margin-left: 10px;
	}
	.text p{
		float: left;
	}
	.text .count{
		float: right;
	}
	.text .icon{
		float: right;
		line-height: 100%;
		margin: 8px 0 0 5px;
	}
	.showmore{
		text-align: center;
		line-height: 60px;
		color: plum;
		font-size: 1.5em;
		font-family: "微软雅黑";
	}
</style>