document.ready = function() {
  document.getElementById('menu').style.display='block';
  
  $(document).ready(function(){
  	$(".image").click(function(){
			$(".close-icon").hide();
	});
	
	$(".small.cont").click(function(){
		$(this).addClass("active");
		$(this).siblings(".small.desc").removeClass("active");
		$(this).siblings(".product-information").hide();
		$(this).siblings(".cont").slideDown("fast");
	});
	
	$(".small.desc").click(function(){
		$(this).addClass("active");
		$(this).siblings(".small.cont").removeClass("active");
		$(this).siblings("img.cont").hide();
		$(this).siblings(".product-information").slideDown("fast");
	});
	
	function imgloaded(img) {
		var $img=$(img);
		$img.addClass('loaded');
	};
  	
  });
  
};
