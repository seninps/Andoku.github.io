myBlurFunction = function(state) {
    /* state can be 1 or 0 */
    var containerElement = document.getElementById('main_container');
    var overlayEle = document.getElementById('overlay');

    if (state) {
        overlayEle.style.display = 'block';
        containerElement.setAttribute('class', 'blur');
    } else {
        overlayEle.style.display = 'none';
        containerElement.setAttribute('class', null);
    }
};


myBlurFunction2 = function(state) {
    if (state == 1) {
    	if (document.getElementById('product').style.display='block') {
    		document.getElementById('product').style.display='none';
    		document.getElementById('product-background').style.display='none';
    	};
    	if (document.getElementById('about').style.display='block') {
    		document.getElementById('about').style.display='none';
    		document.getElementById('product-background').style.display='none';
    	};
        document.getElementById('blur-div').className='alerting-1';
        document.getElementById('social').style.display='block';
        document.getElementById('background').style.display='block';
    } else if (state == 2) {
    	if (document.getElementById('product').style.display='block') {
    		document.getElementById('product').style.display='none';
    		document.getElementById('product-background').style.display='none';
    	};
    	if (document.getElementById('about').style.display='block') {
    		document.getElementById('about').style.display='none';
    		document.getElementById('product-background').style.display='none';
    	};
        document.getElementById('blur-div').className='alerting-1';
        document.getElementById('delivery').style.display='block';
        document.getElementById('background').style.display='block';
    } else if (state == 3) {
    	if (document.getElementById('product').style.display='block') {
    		document.getElementById('product').style.display='none';
    		document.getElementById('product-background').style.display='none';
    	};
        document.getElementById('about').style.display='block';
        document.getElementById('principles').style.display='none';
        document.getElementById('price').style.display='none';
        document.getElementById('popup').style.height='586px';
        document.getElementById('product-background').style.display='block';
    } else if (state == 4) {
    	if (document.getElementById('about').style.display='block') {
    		document.getElementById('about').style.display='none';
    		document.getElementById('product-background').style.display='none';
    	};
        document.getElementById('product').style.display='block';
        document.getElementById('product-background').style.display='block';
    } else if (state == 5) {
    	if (document.getElementById('product').style.display='block') {
    		document.getElementById('product').style.display='none';
    		document.getElementById('product-background').style.display='none';
    	};
    	if (document.getElementById('about').style.display='block') {
    		document.getElementById('about').style.display='none';
    		document.getElementById('product-background').style.display='none';
    	};
        document.getElementById('blur-div').className='alerting';
        document.getElementById('photo').style.display='block';
        document.getElementById('background').style.display='block';
    } else if (state == 6) {
    	if (document.getElementById('product').style.display='block') {
    		document.getElementById('product').style.display='none';
    		document.getElementById('product-background').style.display='none';
    	};
    	if (document.getElementById('about').style.display='block') {
    		document.getElementById('about').style.display='none';
    		document.getElementById('product-background').style.display='none';
    	};
        document.getElementById('blur-div').className='alerting';
        document.getElementById('question').style.display='block';
        document.getElementById('background').style.display='block';
    } else {
        document.getElementById('blur-div').className='';
        document.getElementById('social').style.display='none';
        document.getElementById('delivery').style.display='none';
        document.getElementById('about').style.display='none';
        document.getElementById('product').style.display='none';
        document.getElementById('photo').style.display='none';
        document.getElementById('question').style.display='none';
        document.getElementById('background').style.display='none';
        document.getElementById('product-background').style.display='none';
        ytplayer.playVideo();
    }
	
    /* state can be 1 or 0 
    var containerElement = document.getElementById('main_container');
    var overlayEle = document.getElementById('overlay');
    if (state) {
        overlayEle.style.display = 'block';
        containerElement.setAttribute('class', 'blur');
    } else {
        overlayEle.style.display = 'none';
        containerElement.setAttribute('class', null);
    } */
};

/*ProductCategory = function(type) {
	if (type == 'components') { 
		document.getElementById('why-we-images').style.display='none';
		document.getElementById('components-images').style.display='block';
		document.getElementsByClassName('text-carbohydrates').style.display='block';
		document.getElementsByClassName('text-healthy').style.display='none';
		
	} else {
		document.getElementById('components-images').style.display='none';
		document.getElementById('why-we-images').style.display='block';
		document.getElementsByClassName('text-healthy').style.display='block';
		document.getElementsByClassName('text-carbohydrates').style.display='none';	
	}
};*/

document.ready = function() {
	$(document).ready(function(){
		$(".why-we-image").addClass("active");
		
		$(".healthy").addClass("active");
		
		$(".components-images").hide();
    
    		$(".information:not(:first)").hide();
    		
    		$(".component-image").click(function(){
    			$(this).addClass("active");
    			$(".image").removeClass("active");
    			$(".carbohydrates").addClass("active");
    			$(".text-carbohydrates").slideDown("fast")
    			.siblings(".information:visible").hide();
    			$(".why-we-image").removeClass("active");
    			$(".components-images").slideDown("fast");
    			$(".why-we-images").hide();
    		});
    		
    		$(".why-we-image").click(function(){
    			$(this).addClass("active");
    			$(".image").removeClass("active");
    			$(".healthy").addClass("active");
    			$(".text-healthy").slideDown("fast")
    			.siblings(".information:visible").hide();
    			$(".component-image").removeClass("active");
    			$(".why-we-images").slideDown("fast");
    			$(".components-images").hide();
    		});
    		
		$(".healthy").click(function(){
			$(".text-healthy").slideDown("fast")
			.siblings(".information:visible").hide();
		 	$(this).addClass("active");
		 	$(this).siblings(".image").removeClass("active");
		});
		 
		$(".tasty").click(function(){
			$(".text-tasty").slideDown("fast")
			.siblings(".information:visible").hide();
		 	$(this).addClass("active");
		 	$(this).siblings(".image").removeClass("active");
		});
		 
		$(".nutritionally").click(function(){
			$(".text-nutritionally").slideDown("fast")
			.siblings(".information:visible").hide();
		 	$(this).addClass("active");
		 	$(this).siblings(".image").removeClass("active");
		});
		 
		$(".available").click(function(){
			$(".text-available").slideDown("fast")
			.siblings(".information:visible").hide();
		 	$(this).addClass("active");
		 	$(this).siblings(".image").removeClass("active");
		});
		 
		$(".carbohydrates").click(function(){
			$(".text-carbohydrates").slideDown("fast")
			.siblings(".information:visible").hide();
		 	$(this).addClass("active");
		 	$(this).siblings(".image").removeClass("active");
		});
		 
		$(".vitamins").click(function(){
			$(".text-vitamins").slideDown("fast")
			.siblings(".information:visible").hide();
		 	$(this).addClass("active");
		 	$(this).siblings(".image").removeClass("active");
		});
		 
		$(".fiber").click(function(){
			$(".text-fiber").slideDown("fast")
			.siblings(".information:visible").hide();
		 	$(this).addClass("active");
		 	$(this).siblings(".image").removeClass("active");
		});
		 
		$(".proteins").click(function(){
			$(".text-proteins").slideDown("fast")
			.siblings(".information:visible").hide();
		 	$(this).addClass("active");
		 	$(this).siblings(".image").removeClass("active");
		});
	});
};

/* ShowInformation = function (category) {
	if (category == 'healthy') {
		("p").slideToggle("fast")
		.siblings(".lalala:visible").slideUp("fast");
	}
};*/
 
hide = function(type) {
	text=document.getElementById(type);
	if (type == 'principles') {
		if (text.style.display == 'none') {
			text.style.display = 'block';
			if (document.getElementById('price').style.display == 'block') document.getElementById('popup').style.height='922px';
			else document.getElementById('popup').style.height='850px';
			/*document.getElementById('popup').className = document.getElementById('about').offsetheight;*/
			height = document.getElementById('about').offsetHeight + 192;
			document.getElementById('about').style.height = height + 'px';
			/*if (document.getElementById('about').offsetHeight < '1010') document.getElementById('about').style.height='1010px';*/
		} else {
			text.style.display = 'none';
			if (document.getElementById('price').style.display == 'block') document.getElementById('popup').style.height='730px';
			else document.getElementById('popup').style.height='658px';
			height = document.getElementById('about').offsetHeight - 192;
			document.getElementById('about').style.height = height + 'px';
			
		}
	};
	
	if (type == 'price') {
		if (text.style.display == 'none') {
			text.style.display = 'block';
			if (document.getElementById('principles').style.display == 'block') document.getElementById('popup').style.height='922px';
			else document.getElementById('popup').style.height='730px';
			/*document.getElementById('popup').className = document.getElementById('about').offsetheight;*/
			height = document.getElementById('about').offsetHeight + 72;
			document.getElementById('about').style.height = height + 'px';
			/*if (document.getElementById('about').offsetHeight < '1010') document.getElementById('about').style.height='1010px';*/
		} else {
			text.style.display = 'none';
			if (document.getElementById('principles').style.display == 'block') document.getElementById('popup').style.height='850px';
			else document.getElementById('popup').style.height='658px';
			height = document.getElementById('about').offsetHeight - 72;
			document.getElementById('about').style.height = height + 'px';
			
		}
	}
};

document.onclick = function() {
	if (document.getElementById('background').style.display=='block' && document.getElementById('social').style.display == 'block') {
		document.getElementById('social').style.display = 'none';
		document.getElementById('background').style.display='none';
		document.getElementById('blur-div').className='';
	};
	if (document.getElementById('background').style.display=='block' && document.getElementById('delivery').style.display == 'block') {
		document.getElementById('delivery').style.display = 'none';
		document.getElementById('background').style.display='none';
		document.getElementById('blur-div').className='';
	}
};

window.onload=function() {
	function CSSLoad(file) {
		var link = document.createElement("link");
		link.setAttribute("rel", "stylesheet");
		link.setAttribute("type", "text/css");
		link.setAttribute("href", file);
		document.getElementsByTagName("head")[0].appendChild(link)
	}
	CSSLoad('/other.css');
}
