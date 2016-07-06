document.ready = function() {
	$(document).ready(function(){
		$(".send").click(function(){
			$(this).load("question.php","&name="+$(".name").val()+"&email="+$(".email").val()+"&message="+$(".message").val());
		})
	});   
};