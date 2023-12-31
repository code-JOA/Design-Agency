function init() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

init();

// cursor
var crsr = document.querySelector(".cursor");
var main = document.querySelector(".main");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 20 + "px";
  crsr.style.top = dets.y + 20 + "px";
});

// page5a
document
  .querySelector("#page5a")
  .addEventListener("mousemove", function (dets) {
    document.querySelector("#page5a>img").style.left = dets.x + "px";
    document.querySelector("#page5a>img").style.top = dets.y + "px";
    document.querySelector("#page5a>button").style.left = dets.x + 50 + "px";
    document.querySelector("#page5a>button").style.top = dets.y + 100 + "px";
  });

// page1 animation
gsap.from(".page1 h1,.page1 h2", {
  y: 10,
  rotate: 10,
  opacity: 0,
  delay: 0.3,
  duration: 0.7,
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    // markers: true,
    start: "top 27%",
    end: "top 0",
    scrub: 3,
  },
});

tl.to(
  ".page1 h1",
  {
    x: -100,
    // duration: 1,
  },
  "anim"
);

tl.to(
  ".page1 h2",
  {
    x: 100,
  },
  "anim"
);
tl.to(".main", {
  backgroundColor: "#fff",
});
tl.to(".page1 video", { width: "90%" }, "anim");

// # animation for middle sections
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    // markers: true,
    start: "top -115%",
    end: "top -120%",
    scrub: 3,
  },
});
tl2.to(".main", {
  backgroundColor: "#fff",
});

// # page 5
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    // markers:true,
    start: "top -280%",
    end: "top -300%",
    scrub: 3,
  },
});

tl3.to(".main", {
  backgroundColor: "#0F0D0D",
});

// # boxes before Footer
var boxes = document.querySelectorAll(".box");
boxes.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    // elem.style.backgroundColor = "red";
    var att = elem.getAttribute("data-image");
    crsr.style.width = "350px";
    crsr.style.height = "250px";
    crsr.style.borderRadius = "0";
    crsr.style.backgroundImage = `url(${att})`;
  });

  elem.addEventListener("mouseleave", function () {
    elem.style.backgroundColor = "transparent";
    crsr.style.width = "20px";
    crsr.style.height = "20px";
    crsr.style.borderRadius = "50%";
    crsr.style.backgroundImage = `none`;
  });
});

// var boxes = document.querySelectorAll(".box");
// boxes.forEach(function (elem) {
//   elem.addEventListener("mouseenter", function () {
//     var att = elem.getAttribute("data-image");
//     crsr.style.width = "470px";
//     crsr.style.height = "370px";
//     crsr.style.borderRadius = "0";
//     crsr.style.backgroundImage = `url(${att})`;
//   });
//   elem.addEventListener("mouseleave", function () {
//     elem.style.backgroundColor = "transparent";
//     crsr.style.width = "20px";
//     crsr.style.height = "20px";
//     crsr.style.borderRadius = "50%";
//     crsr.style.backgroundImage = `none`;
//   });
// });

// function init() {
//   gsap.registerPlugin(ScrollTrigger);

//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector(".main"),
//     smooth: true,
//   });
//   locoScroll.on("scroll", ScrollTrigger.update);

//   ScrollTrigger.scrollerProxy(".main", {
//     scrollTop(value) {
//       return arguments.length
//         ? locoScroll.scrollTo(value, 0, 0)
//         : locoScroll.scroll.instance.scroll.y;
//     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//     getBoundingClientRect() {
//       return {
//         top: 0,
//         left: 0,
//         width: window.innerWidth,
//         height: window.innerHeight,
//       };
//     },
//     pinType: document.querySelector(".main").style.transform
//       ? "transform"
//       : "fixed",
//   });

//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//   ScrollTrigger.refresh();
// }

// init();

// var crsr = document.querySelector(".cursor");
// var main = document.querySelector(".main");
// document.addEventListener("mousemove", function (dets) {
//   crsr.style.left = dets.x + 20 + "px";
//   crsr.style.top = dets.y + 20 + "px";
// });

// gsap.from(".page1 h1,.page1 h2", {
//   y: 10,
//   rotate: 10,
//   opacity: 0,
//   delay: 0.3,
//   duration: 0.7,
// });
// var tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".page1 h1",
//     scroller: ".main",
//     // markers:true,
//     start: "top 27%",
//     end: "top 0",
//     scrub: 3,
//   },
// });
// tl.to(
//   ".page1 h1",
//   {
//     x: -100,
//   },
//   "anim"
// );
// tl.to(
//   ".page1 h2",
//   {
//     x: 100,
//   },
//   "anim"
// );
// tl.to(
//   ".page1 video",
//   {
//     width: "90%",
//   },
//   "anim"
// );

// var tl2 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".page1 h1",
//     scroller: ".main",
//     // markers: true,
//     start: "top -115%",
//     end: "top -120%",
//     scrub: 3,
//   },
// });
// tl2.to(".main", {
//   backgroundColor: "#fff",
// });

// var tl3 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".page1 h1",
//     scroller: ".main",
//     // markers:true,
//     start: "top -280%",
//     end: "top -300%",
//     scrub: 3,
//   },
// });

// tl3.to(".main", {
//   backgroundColor: "#0F0D0D",
// });

// var boxes = document.querySelectorAll(".box");
// boxes.forEach(function (elem) {
//   elem.addEventListener("mouseenter", function () {
//     var att = elem.getAttribute("data-image");
//     crsr.style.width = "470px";
//     crsr.style.height = "370px";
//     crsr.style.borderRadius = "0";
//     crsr.style.backgroundImage = `url(${att})`;
//   });
//   elem.addEventListener("mouseleave", function () {
//     elem.style.backgroundColor = "transparent";
//     crsr.style.width = "20px";
//     crsr.style.height = "20px";
//     crsr.style.borderRadius = "50%";
//     crsr.style.backgroundImage = `none`;
//   });
// });

// var h4 = document.querySelectorAll("#nav h4");
// var purple = document.querySelector("#purple");
// h4.forEach(function (elem) {
//   elem.addEventListener("mouseenter", function () {
//     purple.style.display = "block";
//     purple.style.opacity = "1";
//   });
//   elem.addEventListener("mouseleave", function () {
//     purple.style.display = "none";
//     purple.style.opacity = "0";
//   });
// });
