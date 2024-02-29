function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });

loco()
let tl = gsap.timeline();

function navbar(){
  
tl.to(".nav-part1 h1", {
  opacity:1,
  // duration:5,
  // transform: "Scale(1.2)"
})

tl.from(".page1 .nav-part1 h3", {
  opacity:0,
  y: -20,
  // stagger:1,
  duration:1
})

tl.from(".page1 .nav-part2 i", {
  opacity:0,
})

tl.from(".content",{
  opacity:0,
})

tl.from(".content .h3,.h1,.ul", {
  y:-50,
  opacity:0,
  stagger:1
})

tl.to(".content",{
  filter:"blur(20px)",
  transform:"scale(0.95)",
  scrollTrigger:{
    trigger:".content",
    scroller: ".main",
    // markers:true,
    start: "80% 50%",
    end: "80% 50%",
    scrub:3
}
})

}

navbar();

                              //  page 2


tl.from(".upper .left,.right", {
  opacity:0,
  y:50,
  stagger:2,
  duration:1,
  scrollTrigger:{
    trigger:".upper .left,.right",
    scroller: ".main",
    // markers:true,
    start: "-20% 50%",
    end: "-20% 50%",
    scrub:3
}
  
})

tl.from(".lower", {
  opacity:0,
  stagger:2,
  duration:1,
  scrollTrigger:{
    trigger:".upper .left,.right",
    scroller: ".main",
    // markers:true,
    start: "60% 50%",
    end: "60% 50%",
    scrub:3
  }
})

tl.from(".lower img", {
  opacity:0,
  stagger:2,
  duration:1,
  transform:"scale(0.95)",
  scrollTrigger:{
    trigger:".lower img",
    scroller: ".main",
    // markers:true,
    start: "0 50%",
    end: "0 50%",
    scrub:3
  }
})

tl.from(".lower .content2", {
  opacity:0,
  y:100,
  stagger:2,
  duration:1,
  transform:"scale(0.95)",
  scrollTrigger:{
    trigger:".lower .content2",
    scroller: ".main",
    // markers:true,
    start: "-40% 50%",
    end: "-40% 50%",
    scrub:3
  }
})






let tl_page4 =  gsap.timeline({
  scrollTrigger:{
    trigger:".page4",
    scroller:".main",
    // markers:true,
    start:"-40% 0",
    end:"-40% -70%",
    scrub:true
    // pin:true
}
});


tl_page4.from(".page4 .box1", {
  y:100,
  opacity:0,
  // stagger:2,
  duration:1,
  transform:"scale(1.2)",
})

tl_page4.from(".page4 .box2,.box3", {
  opacity:0,
  // stagger:2,
  duration:1,
  transform:"scale(2)",
})


tl_page4.from(".page4-lower img ", {
  opacity:0,
  // stagger:2,
  duration:1,
  transform:"scale(1.5)",
})

tl_page4.from(".page4-lower .content4 ", {
  opacity:0,
  y:100,
  // stagger:2,
  duration:1,
  // transform:"scale(1.5)",
})





let tl_page5 =  gsap.timeline({
  scrollTrigger:{
    trigger:".page5",
    scroller:".main",
    // markers:true,
    start:"-105% 0",
    end:"-105% -70%",
    scrub:true
    // pin:true
}
});


tl_page5.from(".page5 .email ", {
  opacity:0,
  y:100,
  // stagger:2,
  duration:1,
  // transform:"scale(1.5)",
})

tl_page5.from(".page5 img ", {
  opacity:0,
  y:100,
  // stagger:2,
  duration:1,
  // transform:"scale(1.5)",
})


tl_page5.from(".page5 footer ", {
  opacity:0,
  // y:100,
  // stagger:2,
  duration:1,
  // transform:"scale(1.5)",
})

tl_page5.from(".page5 .info", {
  opacity:0,
  // y:100,
  // stagger:2,
  duration:1,
  // transform:"scale(1.5)",
})

tl_page5.from(".page5 .company", {
  opacity:0,
  // y:100,
  // stagger:2,
  duration:1,
  // transform:"scale(1.5)",
})

tl_page5.from(".page5 .news", {
  opacity:0,
  // y:100,
  // stagger:2,
  duration:1,
  // transform:"scale(1.5)",
})