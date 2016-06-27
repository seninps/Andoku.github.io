document.ready = function() {
  document.getElementById('menu').style.display='block';
  
  $(document).ready(function(){
  	$(".image").click(function(){
			$(".close-icon").hide();
	});
	
	$("#product-1 .content").hover(function(){
		$("#product-1 .product-image").css(("background-color", "url(/menu/1/content.jpg)");
	});
	
	$("#product-1 .vitamins").hover(function(){
		$("#product-1 .product-image").css(("background-color", "url(/menu/1/vitamins.jpg)");
	});
	
	$("#product-1 .main").hover(function(){
		$("#product-1 .product-image").css("background-color", "url(/menu/1/main.jpg)");
	});
  	
  });
  
};
