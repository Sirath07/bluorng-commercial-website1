// Locomotive + ScrollTrigger setup
function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });

  // update ScrollTrigger on scroll
  locoScroll.on("scroll", ScrollTrigger.update);

  // scrollerProxy setup
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotiveAnimation();

// Hide whole nav on page1 scroll (markers removed)
gsap.to("#nav", {
  y: -300,
  opacity: 0,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#page1",
    scroller: "#main",
    start: "top top",
    end: "bottom 20%",
    scrub: true
    // markers: false  // (omitted to keep it clean)
  }
});

// Video hover play button
function videoconAnimation() {
  const videocon = document.querySelector("#video-container");
  const playbtn = document.querySelector("#play");

  videocon.addEventListener("mouseenter", () => {
    gsap.to(playbtn, { scale: 1, opacity: 1 });
  });
  videocon.addEventListener("mouseleave", () => {
    gsap.to(playbtn, { scale: 0, opacity: 0 });
  });
  document.addEventListener("mousemove", (e) => {
    gsap.to(playbtn, { left: e.x - 70, top: e.y - 80, duration: 0.15, ease: "power2.out" });
  });
}
videoconAnimation();

// Page load animation
function loadinganimation() {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.3,
    duration: 0.9,
    stagger: 0.25
  });
  gsap.from("#page1 #video-container", {
    scale: 0.95,
    opacity: 0,
    delay: 1.1,
    duration: 0.5
  });
}
loadinganimation();

// Custom cursor follow
document.addEventListener("mousemove", function(e){
  gsap.to("#cursor", { left:e.x, top:e.y, duration:0.12, ease:"power2.out" });
});

// Cursor grow over products
document.querySelectorAll(".child").forEach(function(elem){
  elem.addEventListener("mouseenter", function(){
    gsap.to("#cursor", { transform: 'translate(-50%,-50%) scale(1)' });
  });
  elem.addEventListener("mouseleave", function(){
    gsap.to("#cursor", { transform: 'translate(-50%,-50%) scale(0)' });
  });
});

  function marqueAnimation(){
  window.addEventListener("wheel",function(dets){
  if(dets.deltaY>0){
    gsap.to("#marque",{
      transform:'translateX(-200%)',
      duration:4,
      repeat:-1,
      ease:"none"
    })

    gsap.to("#marque img",{
      rotate:180
    })
  } else {
    gsap.to("#marque",{
    transform:'translateX(0%)',
      duration:4,
      repeat:-1,
      ease:"none"
    })
    gsap.to("#marque img",{
      rotate:0
    })
  }
})
}
marqueAnimation()


// Page4 strap (wheel direction effect preserved, selector fixed to .marque)
function strapMarqueOnWheel(){
  window.addEventListener("wheel", function(e){
    if(e.deltaY > 0){
      gsap.to(".marque", { transform:'translateX(-200%)', duration:4, repeat:-1, ease:"none" });
      gsap.to(".marque img", { rotate:180, duration:0.2 });
    } else {
      gsap.to(".marque", { transform:'translateX(0%)', duration:4, repeat:-1, ease:"none" });
      gsap.to(".marque img", { rotate:0, duration:0.2 });
    }
  });
}
strapMarqueOnWheel();

// Footer SHIPPING WORLDWIDE marquee (infinite loop)
(function shippingBannerMarquee(){
  const track = document.querySelector(".shipping-track");
  if(!track) return;

  // duplicate content to ensure seamless loop
  track.innerHTML = track.innerHTML + track.innerHTML;

  // If you prefer GSAP instead of CSS keyframes, uncomment below and remove CSS @keyframes:
//   gsap.to(track, { xPercent: -50, duration: 18, repeat: -1, ease: "linear" });
})();

// About read more toggle (kept from your version, with aria)
document.querySelectorAll('.about').forEach(section => {
  const btn  = section.querySelector('.about__toggle');
  const more = section.querySelector('.about__more');

  section.classList.remove('is-open');
  btn.setAttribute('aria-expanded', 'false');
  btn.textContent = 'Read More';

  btn.addEventListener('click', () => {
    const open = section.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? 'Read Less' : 'Read More';
  });
});




  function marqueAnimation(){
  window.addEventListener("wheel",function(dets){
  if(dets.deltaY>0){
    gsap.to("#marque",{
      transform:'translateX(-200%)',
      duration:4,
      repeat:-1,
      ease:"none"
    })

    gsap.to("#marque img",{
      rotate:180
    })
  } else {
    gsap.to("#marque",{
    transform:'translateX(0%)',
      duration:4,
      repeat:-1,
      ease:"none"
    })
    gsap.to("#marque img",{
      rotate:0
    })
  }
})
}
marqueAnimation()






