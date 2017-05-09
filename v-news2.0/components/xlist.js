Vue.component('xlist',{
	template:`
		<div class="weui-panel weui-panel_access">
			<div class="weui-panel__hd">新闻列表</div>
			<div class="weui-panel__bd">
				<a v-for="(key,idx) in news" :href="'#/detail/'+idx" class="weui-media-box weui-media-box_appmsg">
					<div class="weui-media-box__hd">
						<img class="weui-media-box__thumb" :src="key.picUrl" alt="">
					</div>
					<div class="weui-media-box__bd">
						<h4 class="weui-media-box__title">{{key.description}}</h4>
						<p class="weui-media-box__desc">{{key.title}}</p>
					</div>
				</a>
			</div>
			<div class="weui-panel__ft">
				<a @click="getnews()" class="weui-cell weui-cell_access weui-cell_link">
					<div class="weui-cell__bd">查看更多</div>
					<span class="weui-cell__ft"></span>
				</a>
			</div>
		</div>
	`,
	data(){
		return {
			news:[],
			page:1,
		}
	},
	mounted(){
		this.getnews()
	},
	methods:{
		getnews(){
			$.get('php/gushi.php',{page:this.page},function(data){
				console.log(JSON.parse(data))
				this.news = this.news.concat(JSON.parse(data).showapi_res_body.newslist)
				this.page++
			}.bind(this))
		}
	},
	computed:{
		title(){
			return this.$store.getters.getData
		}
	},
})