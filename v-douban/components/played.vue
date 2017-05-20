<template>
	<div class="content">
		<div v-show='bool' class="load">
		  	<mu-circular-progress :size="60" :strokeWidth="5" color="plum"/>
		</div>
		<a v-for='key in movie' :href="'#/intro/'+key.id" class="movie">
			<div><img :src="key.images.medium" alt="" /></div>
			<div class="intro">
				<h3 v-text='key.title'></h3>
				<p><span>评分：</span><span v-text='key.rating.average'></span></p>
				<p><span>导演：</span><span v-text='key.directors[0].name'></span></p>
				<p class="casts">
					<span>主演：</span>
					<span v-for='arr in key.casts' v-text='arr.name+" / "'></span>
				</p>
				<p><span v-text='key.collect_count'></span><span>人看过</span></p>
			</div>
		</a>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				movie: [],
				bool:true,
			}
		},
		mounted() {
			$.ajax({
				type: 'get',
				url: 'https://api.douban.com/v2/movie/in_theaters',
				data: {
					apikey: '0b2bdeda43b5688921839c8ecb20399b',
					city: '广州',
					start: 1,
					count: 8,
				},
				dataType: 'jsonp',
				success: function(data) {
					console.log(data.subjects)
					this.movie = this.movie.concat(data.subjects)
					this.bool = false
				}.bind(this)
			})
		}
	}
</script>

<style scoped>
	.load {
		position: fixed;
		top: 50%;
		left: 50%;
		margin: -30px 0 0 -30px;
	}
	.content>a {
		display: block;
		text-align: left;
		color: #000;
		border-bottom: 1px solid #ddd;
	}
	
	.movie {
		width: 100%;
		padding: 15px 10px;
		overflow: hidden;
	}
	
	.movie>div {
		float: left;
		margin: 0 10px;
		line-height: 100%;
	}
	
	.movie .intro {
		width: 60%;
	}
</style>