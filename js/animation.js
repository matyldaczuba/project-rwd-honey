document.addEventListener('DOMContentLoaded', () => {
	anime.timeline({
			easing: 'easeOutExpo',
		})
		.add({
			targets: '.nav-wrapper',
			width: ['0%', '100%'],
		})
		.add({
			targets: '.card-contactMe',
			width: ['0%', '100%'],
		})
		.add({
			targets: '.logo',
			width: ['0%', '35%'],
			offset: '-=500',
		})
		.add({
			targets: '.logo h1, nav a',
			opacity: [0, 1],
			translateY: [20, 0],
			delay: (el, i) => 400 * i,
			offset: '-=700',
			// delay: 1500,
		})
		.add({
			targets: '.text-section',
			translateY: [100, 0],
			opacity: [0, 1],
			offset: '-=700',
		})
		.add({
			targets: '.image-section',
			translateX: [-300, 0],
			borderRadius: ['0%', '50%'],
			opacity: [0, 1],
			offset: '-=2000',
			easing: 'easeInOutQuad'
		})
		.add({
			targets: '#gallery-loader',
			height: ['0px', '100px'],
			opacity: [0, 1],
			offset: '-=700',
		})
		.add({
			targets: '.gallery-counter',
			translateX: [0, 350],
			delay: (el, i) => 100 * i,
			opacity: [0, 1],
			offset: '-=1000',
		})
		
})

