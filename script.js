var init = function(){  
  var ps = new ParticleSlider({
    width: 1e9,
    height: 1e9,
    color: 'rgba(255,255,255,1)',
    ptlGap:1,
    mouseForce: 300
  });
}


var initParticleSlider = function(){
  var psScript = document.createElement('script');
  (psScript.addEventListener
    ? psScript.addEventListener('load', init, false)
    : psScript.onload = init);
  psScript.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/23500/ps-0.9.js';
	psScript.setAttribute('type', 'text/javascript');
  document.body.appendChild(psScript);
}
    
(window.addEventListener
  ? window.addEventListener('load', initParticleSlider, false)
  : window.onload = initParticleSlider);