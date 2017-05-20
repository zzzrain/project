<template>
	<div>
		<header>
			<span>广州</span>
			<input type="text" placeholder="电影/电视剧/影人"/>
		</header>
		<nav>
			<a href="#/hot/played">正在热映</a>
			<a href="#/hot/prevue">即将上映</a>
		</nav>
		<main>
			<router-view></router-view>
		</main>
		<footer>
			<mu-paper>
				<mu-bottom-nav :value="bottomNav" @change="handleChange">
					<mu-bottom-nav-item value="movies" title="热映" icon="event seat" />
					<mu-bottom-nav-item value="music" title="找片" icon="visibility" />
					<mu-bottom-nav-item value="books" title="我的" icon="face" />
				</mu-bottom-nav>
			</mu-paper>
		</footer>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bottomNav: 'recents'
			}
		},
		methods: {
			handleChange(val) {
				this.bottomNav = val
			}
		}
	}
</script>

<style>
	header{
		padding:5px 5px;
		line-height: 30px;
		background: plum;
		position: fixed;
		top: 0px;
		left: 0px;
		right: 0px;
	}
	header span{
		display: inline-block;
		width: 15%;
		text-align: center;
		color: #fff;
	}
	header input{
		width: 80%;
		border-radius: 5px;
		padding: 1px 5px;
		background: #eee;
	}
	nav{
		background: #fff;
		position: fixed;
		top: 46px;
		left: 0;
		right: 0;
		border-bottom: 1px solid #ddd;
	}
	nav a{
		display: inline-block;
		width: 49.5%;
		text-align: center;
		line-height: 50px;
	}
	main{
		position: absolute;
		top:100px;
		z-index: -1;
	}
	footer {
		position: fixed;
		bottom: 0px;
		width: 100%;
	}
</style>