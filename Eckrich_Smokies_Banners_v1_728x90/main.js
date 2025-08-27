// Banner duration timer start time
var startTime;
// Timeline reference
var tl;
init();
// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();

  // Set Global Timeline
  tl = new TimelineMax({ onComplete: endTime });
  // tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });

  animate();
}

function animate() {
  tl.set(["#main_content"], { autoAlpha: 1, rotationZ: 0.1, force3D: true });
  // tl.set(["#photo, #photo2"], { rotationZ: 0.1, force3D: true });
  tl.set(["#photo2"], { y: 70, autoAlpha:1 });
  tl.set(['#h1 span', '#h2 span'], { autoAlpha: 0 });

  tl.addLabel('frame_1', 0)
  .to('#photo2', .5, { y: 0, ease: "none" }, "frame_1")
  .to(['#logo'], 0.5, { autoAlpha: 1, ease: Power1.easeInOut }, "frame_1+=1")
  .to(['#h1', '#h2'], 0.5, { autoAlpha: 1, ease: Power1.easeInOut }, "frame_1")
    .staggerTo(['#h1 span', '#h2 span'], 1, { autoAlpha: 1, y: 0, ease: Power2.easeOut }, 0.3, 'frame_1+=1.7')
    .staggerFrom(['#h1 span', '#h2 span'], 1, { y: '+=50', ease: Power2.easeOut }, 0.3, 'frame_1+=2')

  // tl.addLabel('frame_END', '+=4.5')
  tl.addLabel('frame_2', 4)
    .to(['#cta'], 0.5, { autoAlpha: 1, ease: Power1.easeInOut }, "frame_2")
    .to(['#logoText'], 0.5, { autoAlpha: 1, ease: Power1.easeInOut }, "frame_2+=0.5")

}

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();
  setRollover();
  // console.log( "Animation duration: " + (endTime - startTime) / 1000 + " seconds");
}

// CTA grow on hover

function setRollover() {
  document.getElementById('default_exit').addEventListener('mouseover', defaultOver, false);
  document.getElementById('default_exit').addEventListener('mouseout', defaultOut, false);
}

function defaultOver() {
  TweenMax.to('#cta', 0.25, { scale: 1.05, ease: Power1.easeInOut })
}

function defaultOut() {
  TweenMax.to('#cta', 0.25, { scale: 1, ease: Power1.easeInOut })
}



