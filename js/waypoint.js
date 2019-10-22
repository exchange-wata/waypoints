$('.animated').waypoint({
	handler(direction) {
	var animatedPoint = $(this.element);
		if (direction === 'down') {
			animatedPoint.removeClass('fadeOutUp');
			animatedPoint.addClass('fadeInUp');	
		}else if (direction === 'up'){
			animatedPoint.removeClass('fadeInUp');
			animatedPoint.addClass('fadeOutUp');		
		}
	},
	offset: '50%',
});