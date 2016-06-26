document.ready = function() {
  document.getElementById('menu').style.display='block';
  
  $(document).ready(function(){
    $(".image").click(function(){
			$(".close-icon").hide();
		});
  });
  
  $(document).ready(function(){
    $(".fancybox-close").click(function(){
			$(".close-icon").slideDown("fast");
		});
  });
  
};
