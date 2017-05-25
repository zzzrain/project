<template>
	<div class="content">
		<header>
			<div class="face" @click="bool=!bool"><img src="" alt="" /></div>
			<div class="login"><a href="/#/login">请登录</a></div>
			<div class="logout" @click="logout()">[退出]</div>
			<div v-show="bool"class="file">
				<input type="file" @change="commit()"/>
				<button @click="ok()">确定</button>
			</div>
		</header>
		<nav>
			<mu-tabs :value="activeTab" @change="handleTabChange">
				<mu-tab value="收藏" title="收藏"/>
				<mu-tab value="影评" title="影评" lineClass="color:black"/>
			</mu-tabs>
			<div v-if="activeTab === '收藏'">
				<h2>Tab One</h2>
				<p>
					这是第一个 tab
				</p>
			</div>
			<div v-if="activeTab === '影评'">
				<h2>Tab Two</h2>
				<p>
					这是第二个 tab
				</p>
			</div>
		</nav>
		<footer>
			<mu-paper>
				<mu-bottom-nav :value="bottomNav" @change="handleChange">
					<mu-bottom-nav-item value="hots" title="热映" href="/#/hots" icon="event seat" />
					<mu-bottom-nav-item value="find" title="找片" href="/#/find" icon="visibility" />
					<mu-bottom-nav-item value="user" title="我的" href="/#/user" icon="face" />
				</mu-bottom-nav>
			</mu-paper>
		</footer>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bottomNav: 'user',
				activeTab: '收藏',
				bool:false,
				imgUrl:'',
				username:'',
			}
		},
		mounted() {
			var cookie = document.cookie.split('; ');
			console.log(cookie)
			cookie.map(function(item) {
				item = item.split('=')
				if(item[0] === 'username'){
					$('.login a').text(item[1])
					this.username = item[1]
				}
			}.bind(this))
		},
		methods: {
			handleChange(val) {
				this.bottomNav = val
			},
			handleTabChange(val) {
				this.activeTab = val
			},
			logout() {
				$('.login a').text('请登录')
				var now = new Date()
				now.setDate(now.getDate() - 1)
				document.cookie = 'username=xxx;expires=' + now + ';path=/'
			},
			commit(){
                console.log($('.file input')[0].files[0]);
                var imgUrl = window.URL.createObjectURL($('.file input')[0].files[0]);
                console.log(imgUrl)
                this.imgUrl = imgUrl;
           	},
           	ok(){
				$.post(
					'http://localhost/project/v-douban/php/user.php',
					{username:this.username,imgUrl:this.imgUrl},
					function(data){
						console.log(data)
				}.bind(this))
           	}
		}
	}
</script>

<style scoped lang="scss">
	header {
		height: 180px;
		padding: 20px;
		background: #40ffb1;
		position: relative;
		.face {
			position: absolute;
			top: 20%;
			left: 10%;
			img {
				display: block;
				width: 80px;
				height: 80px;
				line-height: 100%;
				border-radius: 50%;
				background: #ccc;
			}
		}
		.file {
			position: absolute;
			bottom: 0;
			margin: 0 5%;
		}
		.login {
			position: absolute;
			top: 25%;
			left: 40%;
			a {
				display: block;
				color: #fff;
				font-size: 1.5em;
			}
		}
		.logout {
			position: absolute;
			top: 6%;
			right: 6%;
			padding: 5px;
			color: #e340ff;
			font-size: 1em;
		}
	}
	
	footer {
		position: fixed;
		bottom: 0px;
		width: 100%;
	}
</style>