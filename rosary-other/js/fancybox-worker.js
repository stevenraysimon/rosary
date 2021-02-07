$(document).ready(function() {
			$('.fancybox').fancybox();
			// Change title type, overlay closing speed
			$(".fancybox").fancybox({
			tpl: {
        			closeBtn:'<a title="Close" class="fancybox-item fancybox-close myClose" href="javascript:;">Close</a>',
					autoscale: true,
    			},
				helpers: { 
        			title: null
    			}
			});
});