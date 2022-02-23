var init = function(){
  var isMobile = navigator.userAgent &&
  navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
  var isSmall = window.innerWidth < 600;

  var ps = new ParticleSlider({
    ptlGap: isMobile || isSmall ? 3 : 0,
    ptlSize: isMobile || isSmall ? 3 : 1,
    ptlGap: 1 ,
    mouseForce: 100 ,
    monochrome: true ,
    color: '#fff' ,
    ptlSize: 1 ,
    
  });
}

// var ptl = new ps.Particle(ps);

// Tamino Martinius - All rights reserved

// Copyright © 2013 Tamino Martinius (http://zaku.eu)
// Copyright © 2013 Particleslider.com (http://particleslider.com

// Terms of usage: http://particleslider.com/legal/license

// var init = function(){
//   var isMobile = navigator.userAgent &&
//     navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
//   var isSmall = window.innerWidth < 600;
  
//   var ps = new ParticleSlider({
//     ptlGap: isMobile || isSmall ? 3 : 0,
//     ptlSize: isMobile || isSmall ? 3 : 1,
//     width: 1e9,
//     height: 1e9,
//     mouseForce: 100 ,
//     color: '#fff',
//     monochrome: true ,
//   });
// }

// var initParticleSlider = function(){
//   var psScript = document.createElement('script');
//   (psScript.addEventListener
//     ? psScript.addEventListener('load', init, false)
//     : psScript.onload = init);
//   psScript.src = 'http://particleslider.com/js/particleslider/current/particleslider.js';
// 	psScript.setAttribute('type', 'text/javascript');
//   document.body.appendChild(psScript);
// }
    
(window.addEventListener
  ? window.addEventListener('load', init, false)
  : window.onload = init);


  /* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area":1000
      }
    },
    "color": {
      "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
    },
    
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#fff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.6,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 120,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});