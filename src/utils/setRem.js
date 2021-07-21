(function(psdw){
    var dpr=0 , rem=0 , scale=0;
    var htmlDOM=document.documentElement;
    dpr=window.devicePixelRatio;
    var currentWidth=htmlDOM.clientWidth;
    scale=currentWidth/psdw;
    rem=psdw/100;
    rem=rem*scale;
    console.log(scale)
    htmlDOM.style.fontSize=rem+'px';
    console.log(rem)
    htmlDOM.setAttribute('data-dpr',dpr)
  })(1920)