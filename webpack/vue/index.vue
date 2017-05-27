<template>
	<h3>{{name}}</h3>
</template>
<script>
	/*module.exports = {  // es5
		
	} */
	export default {  // es6
		data(){
			return {
				name:'LeBron·Banana'
			}
		},
		mounted(){
			$('h3').css('color','gold')
		}
	}
</script>
<style scoped>
	h3{background: orange}
</style>
