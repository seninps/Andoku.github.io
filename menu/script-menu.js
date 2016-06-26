document.ready = function() {
  document.getElementById('menu').style.display='block';
};

document.onclick = function() {  
  if (document.getElementById('product-1').style.display=='block') document.getElementById('close').style.display='none';
  else document.getElementById('close').style.display='block';
};
