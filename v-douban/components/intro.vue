<template>
	<div class="content">
		<div v-show='load' class="load">
		  	<mu-circular-progress :size="60" :strokeWidth="5" color="plum"/>
		</div>
		<div class="post"><img :src="data.images.large" alt="" /></div>
		<div class="info">
			<h2 v-text='data.title'></h2>
			<p>
				<span v-text='data.year+" / "'></span>
				<span v-for='key in data.genres' v-text='key+" / "'></span>
			</p>
			<p><span>原名：</span><span v-text='data.original_title'></span></p>
			<p><span>上映时间：</span><span v-text='data.mainland_pubdate'></span></p>
			<p><span>片长：</span><span v-text='data.durations[0]'></span></p>
			<div class="rating">
				<span>豆瓣评分</span>
				<h2 v-text='data.rating.average'></h2>
				<span>多少人想看</span>
				<p v-text='data.wish_count'></p>
			</div>
			<p>简介</p>
			<p v-text='data.summary'></p>
		</div>
		<div class="comment">
			<a :href="'#/intro/'+data.id+'/comments'">短评</a>
			<a :href="'#/intro/'+data.id+'/reviews'">影评</a>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				data: {},
				load: true,
			}
		},
		mounted() {
			var src = window.location.hash.slice(8)
			$.ajax({
				type: 'get',
				url: 'http://api.douban.com/v2/movie/subject/' + src,
				data: {
					apikey: '0b2bdeda43b5688921839c8ecb20399b',
				},
				dataType: 'jsonp',
				success: function(data) {
					console.log(data)
					this.data = data
					//this.load = false
				}.bind(this)
			})

		}
	}
</script>

<style scoped>
	h2,p{
		margin: 0;
	}
	.load {
		position: fixed;
		top: 50%;
		left: 50%;
		margin: -30px 0 0 -30px;
	}	
	.post {
		padding: 20px;
		text-align: center;
	}
	.post img {
		width: 150px;
	}
	.info {
		padding: 20px;
		position: relative;
	}
	.rating {
		position: absolute;
		top: 25px;
		right: 35px;
		width: 100px;
		padding: 10px 0;
		text-align: center;
		background: #eee;
	}
	.comment a{
		display: inline-block;
		width: 49.5%;
		text-align: center;
		line-height: 50px;
		background: #eee;
	}
</style>