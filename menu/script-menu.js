document.ready = function() {
  document.getElementById('menu').style.display='block';
  
  $(document).ready(function(){
  	$(".image").click(function(){
			$(".close-icon").hide();
	});
	
	/*$("#product-1 .content").hover(function(){
		$("#product-1 .product-image").css("background-image", "url(/menu/1/content-new.jpg)");
	});
	
	$("#product-1 .vitamins").hover(function(){
		$("#product-1 .product-image").css("background-image", "url(/menu/1/vitamins-new.jpg)");
	});
	
	$("#product-1 .main").hover(function(){
		$("#product-1 .product-image").css("background-image", "url(/menu/1/main.png)");
	});
	
	$("#product-2 .content").hover(function(){
		$("#product-2 .product-image").css("background-image", "url(/menu/2/content.jpg)");
	});
	
	$("#product-2 .vitamins").hover(function(){
		$("#product-2 .product-image").css("background-image", "url(/menu/2/vitamins.jpg)");
	});
	
	$("#product-2 .main").hover(function(){
		$("#product-2 .product-image").css("background-image", "url(/menu/2/main.png)");
	});
	
	$("#product-3 .content").hover(function(){
		$("#product-3 .product-image").css("background-image", "url(/menu/3/content.jpg)");
	});
	
	$("#product-3 .vitamins").hover(function(){
		$("#product-3 .product-image").css("background-image", "url(/menu/3/vitamins.jpg)");
	});
	
	$("#product-3 .main").hover(function(){
		$("#product-3 .product-image").css("background-image", "url(/menu/3/main.png)");
	});
	
	$("#product-4 .content").hover(function(){
		$("#product-4 .product-image").css("background-image", "url(/menu/4/content.jpg)");
	});
	
	$("#product-4 .vitamins").hover(function(){
		$("#product-4 .product-image").css("background-image", "url(/menu/4/vitamins.jpg)");
	});
	
	$("#product-4 .main").hover(function(){
		$("#product-4 .product-image").css("background-image", "url(/menu/4/main.png)");
	});
	
	$("#product-5 .content").hover(function(){
		$("#product-5 .product-image").css("background-image", "url(/menu/5/content.jpg)");
	});
	
	$("#product-5 .vitamins").hover(function(){
		$("#product-5 .product-image").css("background-image", "url(/menu/5/vitamins.jpg)");
	});
	
	$("#product-5 .main").hover(function(){
		$("#product-5 .product-image").css("background-image", "url(/menu/5/main.png)");
	});
	
	$("#product-6 .content").hover(function(){
		$("#product-6 .product-image").css("background-image", "url(/menu/6/content.jpg)");
	});
	
	$("#product-6 .vitamins").hover(function(){
		$("#product-6 .product-image").css("background-image", "url(/menu/6/vitamins.jpg)");
	});
	
	$("#product-6 .main").hover(function(){
		$("#product-6 .product-image").css("background-image", "url(/menu/6/main.png)");
	});
	
	$("#product-7 .vitamins").hover(function(){
		$("#product-7 .product-image").css("background-image", "url(/menu/7/vitamins.jpg)");
	});
	
	$("#product-7 .main").hover(function(){
		$("#product-7 .product-image").css("background-image", "url(/menu/7/main.png)");
	});
	
	$("#product-8 .content").hover(function(){
		$("#product-8 .product-image").css("background-image", "url(/menu/8/content.jpg)");
	});
	
	$("#product-8 .vitamins").hover(function(){
		$("#product-8 .product-image").css("background-image", "url(/menu/8/vitamins.jpg)");
	});
	
	$("#product-8 .main").hover(function(){
		$("#product-8 .product-image").css("background-image", "url(/menu/8/main.png)");
	});
	
	$("#product-9 .content").hover(function(){
		$("#product-9 .product-image").css("background-image", "url(/menu/9/content.jpg)");
	});
	
	$("#product-9 .vitamins").hover(function(){
		$("#product-9 .product-image").css("background-image", "url(/menu/9/vitamins.jpg)");
	});
	
	$("#product-9 .main").hover(function(){
		$("#product-9 .product-image").css("background-image", "url(/menu/9/main.png)");
	});
	
	$("#product-10 .content").hover(function(){
		$("#product-10 .product-image").css("background-image", "url(/menu/10/content.jpg)");
	});
	
	$("#product-10 .vitamins").hover(function(){
		$("#product-10 .product-image").css("background-image", "url(/menu/10/vitamins.jpg)");
	});
	
	$("#product-10 .main").hover(function(){
		$("#product-10 .product-image").css("background-image", "url(/menu/10/main.png)");
	});*/
	
	$(".small.cont").click(function(){
		$(this).addClass("active");
		$(this).siblings(".small.desc").removeClass("active");
		$(this).siblings(".product-information").hide();
		$(this).siblings(".cont").slideDown("fast");
	});
	
	$(".small.desc").click(function(){
		$(this).addClass("active");
		$(this).siblings(".small.cont").removeClass("active");
		$(this).siblings(".product-information").slideDown("fast");
		$(this).siblings(".cont").hide();
	});
  	
  });
  
};
