<template>
	<div class="content">
		<div v-show='load' class="load">
		  	<mu-circular-progress :size="60" :strokeWidth="5" color="plum"/>
		</div>
		<div class="poster"><img :src="film.images.large"/></div>
		<div class="message">
			<div class="info">
				<h2 v-text='film.title'></h2>
				<p>
					<span v-text='film.year+" / "'></span>
					<span v-for='key in film.genres' v-text='key+" / "'></span>
				</p>
				<p><span>原名：</span><span v-text='film.original_title'></span></p>
				<p><span>上映时间：</span><span v-text='film.mainland_pubdate'></span></p>
				<p><span>片长：</span><span v-text='film.durations[0]'></span></p>
			</div>
			<div class="intro">
				<p>简介</p>
				<a v-html="film.summary" :href="film.alt" class="flow color"></a>
				<span @click="flow" class="all">展开</span>
			</div>
			<div class="rating">
				<span>豆瓣评分</span>
				<h2 v-text='film.rating.average'></h2>
				<span>多少人想看</span>
				<p v-text='film.wish_count'></p>
			</div>
		</div>
		<div>
			<div class="center">
				<a :href="'#/intro/'+film.id+'/comments'">短评</a>
				<a :href="'#/intro/'+film.id+'/reviews'">影评</a>
			</div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				film: {
					images:{
						large:'',
					},
					alt:'',
					title:'',
					year:'',
					genres:'',
					original_title:'',
					mainland_pubdate:'',
					durations:'',
					rating:{
						average:''
					},
					wish_count:'',
					summary:'',
					id:'',
				},
				load: true,
				flow:false,
			}
		},
		mounted() {
			var src = window.location.hash.substr(8,8)
			console.log(src)
			$.ajax({
				type: 'get',
				url: 'http://api.douban.com/v2/movie/subject/' + src,
				data: {
					apikey: '0b2bdeda43b5688921839c8ecb20399b',
				},
				dataType: 'jsonp',
				success: function(data) {
					console.log(data)
					this.film = data
					this.load = false
				}.bind(this)
			})
			//$('.all').click($('.flow').removeClass())
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
	.poster {
		display: block;
		padding: 20px;
		text-align: center;
	}
	.poster img {
		width: 150px;
	}
	.message {
		padding: 20px;
		position: relative;
	}
	.info{
		width: 60%;
	}
	.color{
		color: #000;
	}
	.flow{
		overflow: hidden;  
    	text-overflow: ellipsis;  
    	display: -webkit-box;  
   		-webkit-line-clamp: 5;  
    	-webkit-box-orient: vertical;
    	position: relative; 
	}
	.flow::after{
	  content:'...';
	  position: absolute;
	  right: 0;
	  bottom: 0;
	  width: 38px;
	  height: 21px;
	  background-color: #fff;
	}
	.all{
		position: absolute;
		bottom: 18px;
		right: 24px;
		color: #40ff85;
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
	.center{
		background: #eee;
	}
	.center a{
		display: inline-block;
		width: 49.5%;
		text-align: center;
		line-height: 50px;
	}
</style>