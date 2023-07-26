function n(text, type, time, closein) {
    timen = (time) ? time : 3500;
    bdsd = (closein) ? closein : true;
    new Noty({
        text        : text,
        type        : type,
        dismissQueue: true,
        layout      : 'bottomRight',
        theme       : 'mint',
        progressBar: true,
        timeout: timen,
        killer: bdsd
    }).show();
}

$(function(){
	$('.hamburg-menu').click(function(event) {
		$('body').addClass('stops');
		$('.ifm-overlay').addClass('open');
		$('.hamburger-menu').addClass('open');
	});
	$('.ifm-overlay').click(function(event) {
		$('body').removeClass('stops');
		$('.ifm-overlay').removeClass('open');
		$('.hamburger-menu').removeClass('open');
	});
	$('.hamburger-menu-close').click(function(event) {
		$('body').removeClass('stops');
		$('.ifm-overlay').removeClass('open');
		$('.hamburger-menu').removeClass('open');
	});
	$('.hamburg-item').click(function(event) {
		$('body').removeClass('stops');
		$('.ifm-overlay').removeClass('open');
		$('.hamburger-menu').removeClass('open');
	});
});

$(function(){
	$('.sendMessage').click(function(event) {
		if($('.nc').val() == ''){
		return n('Enter your Name!', 'error');
	    }
		if($('.ec').val() == ''){
		return n('Enter your Email!', 'error');
	    }
		if($('.fc').val() == ''){
		return n('Enter from Whom!', 'error');
	    }
		if($('.wc').val() == ''){
		return n('Enter to Who!', 'error');
	    }
		if($('.vc').val() == ''){
		return n('Enter Volume!', 'error');
	    }
		if($('.mc').val() == ''){
		return n('Enter Information!', 'error');
	    }
		n('Your message has been sent!', 'success');
	});
});	

$(function(){
	$('.nc').click(function(event) {
		window.location="tel:+971552364173";
	});
	$('.ec').click(function(event) {
		window.location="mailto:manager@agroexportllc.com";
	});
	$('.ac').click(function(event) {
		window.location="https://www.google.com/maps/search/Business+Center+1,+M+Floor,+The+Meydan+Hotel,+Nad+Al+Sheba,+Dubai,+U.A.E./@25.1563062,55.2999728,17.15z?entry=ttu";
	});
});

