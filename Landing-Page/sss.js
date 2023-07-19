function init() {
  gsap.registerPlugin(ScrollTrigger);

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
    },
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

var t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    markers: true,
    start: "top 30%",
    end: "top 0",
    scrub: 2,
  },
});

t1.to{
    ".page1 h2" ,{
        x: -100,
    }
}

t1.to{
    ".page h2" , {
        x= 100
    }
}

gsap.to(".page1 h1", {
  x: -100
     duration: 4,
    scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      markers: true,
      start: "top 30%",
      end: "top 0",
      scrub: 2,
    },
});
