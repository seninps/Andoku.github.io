document.ready = function() {
  document.getElementById('menu').style.display='block';
};

document.onclick = function() {  
  if (document.getElementById('product-1').style.display=='block') document.getElementsByClassName('close-icon').style.display='none';
  else document.getElementsByClassName('close-icon').style.display='block';
};
