const swiper = new Swiper('.swiper-container');

// Add tabs
jQuery(document).ready(function(){
    jQuery('.d-tabs > ul > li').click(function(){
        const tab_id = jQuery(this).attr('data-tab');
        jQuery('.d-tabs > ul > li').removeClass('active');
        jQuery('.d-tabs .d-content').removeClass('active');
        jQuery(this).addClass('active');
        jQuery("#"+tab_id).addClass('active');
       return false;
    });
});

// Плавный скролл по странице
jQuery(document).ready(function () {
    jQuery('.home a[href*="#"]').on("click", function (e) {
        const anchor = jQuery(this);
        jQuery('html, body').stop().animate({
            scrollTop: jQuery(anchor.attr('href')).offset().top - 60
        }, 777);
        e.preventDefault();
         return false;
    });
});

// Add modal
jQuery(document).ready(function () {
	jQuery('button.da-modal').click(function () {
	  const modal_id = jQuery(this).attr('data-name');
	  jQuery('.da-modal-open-bg').addClass("open").fadeIn();
	  jQuery("#"+modal_id).addClass("open");
	});

	jQuery('button.closeModal').click(function () {
	    jQuery('.daModal').removeClass('open');
	    jQuery('.da-modal-open-bg').fadeOut();
	});    

	jQuery('.da-modal-open-bg').click(function () {
	    jQuery('.daModal').removeClass('open');
	    jQuery('.da-modal-open-bg').fadeOut();
	});
});
