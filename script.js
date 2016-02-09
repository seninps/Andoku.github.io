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
    if (state) {
        document.getElementById('example').className='alerting';
        document.getElementById('overlay').style.display='block';
    } else {
        document.getElementById('example').className='';
        document.getElementById('overlay').style.display='none';
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
document.onclick = function() { document.getElementById('overlay').style.display='none'; document.getElementById('example').className=''; };
