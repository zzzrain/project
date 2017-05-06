Vue.component("xdetail", {
	template: `
		<article class="weui-article">
		    <h1>{{news.title}}</h1>
		    <section>
		        <section>
		            <h3>{{news.description}}</h3>
		            <p>
		                <img :src="news.picUrl" alt="">
		            </p>
		        </section>
		    </section>
		</article>
	`,
	data:function(){
		return {
			news:""
		}
	},
	mounted() {
		console.log(this)
		console.log(this.$route.params.id)
		this.$http.get("php/gushi.php", {
			params: {
				page: 1
			}
		}).then(function(data) {
			console.log(data)
			this.news = data.body.showapi_res_body.newslist[this.$route.params.id]
		})
	}
})