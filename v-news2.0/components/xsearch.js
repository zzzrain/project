Vue.component('xsearch',{
	template:`
		<div class="has_header ng-scope">
			<div class="weui-search-bar" :class="{'weui-search-bar_focusing':show}" id="search_bar">
				<form class="weui-search-bar__form">
					<div class="weui-search-bar__box">
						<i class="weui-icon-search"></i>
						<input type="search" v-model="val" @focus="search()" @keyup="commit()" class="weui-search-bar__input" id="search_input" placeholder="搜索" />
						<a @click="clean()" class="weui-icon-clear" id="search_clear"></a>
					</div>
					<label for="search_input" class="weui-search-bar__label" id="search_text">
			            <i class="weui-icon-search"></i>
			            <span>搜索</span>
			        </label>
				</form>
				<a @click="show=false" class="weui-search-bar__cancel-btn" id="search_cancel">取消</a>
			</div>
		</div>
	`,
	data(){
		return {
			show:false,
			val:'',
		}
	},
	methods:{
		search(){
			this.show = true
		},
		clean(){
			this.val = ''
			$('#search_input').focus()
			this.$store.commit('change',this.val)
		},
		commit(){
			// 提交数据		
			this.$store.commit('change',this.val)
		}
	},
})