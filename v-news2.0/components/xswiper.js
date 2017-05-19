Vue.component('xswiper',{
	template:`
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide"><img class="swiper-img" src="img/cat.jpg" /></div>
				<div class="swiper-slide"><img class="swiper-img" src="img/cat.jpg" /></div>
				<div class="swiper-slide"><img class="swiper-img" src="img/cat.jpg" /></div>
				<div class="swiper-slide"><img class="swiper-img" src="img/cat.jpg" /></div>
				<div class="swiper-slide"><img class="swiper-img" src="img/cat.jpg" /></div>
				<div class="swiper-slide"><img class="swiper-img" src="img/cat.jpg" /></div>
				<div class="swiper-slide"><img class="swiper-img" src="img/cat.jpg" /></div>
				<div class="swiper-slide"><img class="swiper-img" src="img/cat.jpg" /></div>
				<div class="swiper-slide"><img class="swiper-img" src="img/cat.jpg" /></div>
				<div class="swiper-slide"><img class="swiper-img" src="img/cat.jpg" /></div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
	`,
	mounted(){
		console.log('ok')
		var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			paginationClickable: true
		});
	}
})