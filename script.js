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
        document.getElementById('blur-div').className='alerting';
        document.getElementById('overlay1').style.display='block';
    } else if (state == 2) {
        document.getElementById('blur-div').className='alerting';
        document.getElementById('delivery').style.display='block';
    } else if (state == 3) {
        document.getElementById('blur-div').className='alerting';
        document.getElementById('about').style.display='block';
    } else if (state == 4) {
        document.getElementById('blur-div').className='alerting';
        document.getElementById('product').style.display='block';
    }else {
        document.getElementById('blur-div').className='';
        document.getElementById('overlay1').style.display='none';
        document.getElementById('delivery').style.display='none';
        document.getElementById('about').style.display='none';
        document.getElementById('product').style.display='none';
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
document.onclick = function() { document.getElementById('overlay').style.display='none'; document.getElementById('blur-div').className=''; };
