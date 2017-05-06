Vue.component('xhead', {
	template: `
		<header>
			<p>{{title}}</p>
		</header>
	`,
	computed:{
		title(){
			return this.$store.getters.get
		}
	}
})