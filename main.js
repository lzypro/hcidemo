gsap.from(".hero-section", {duration: 1.2, opacity: 0, ease: "power1"});

gsap.from(".title-caption", {duration: 1, y: 20, opacity: 0, ease: "power1"});

gsap.from(".smartx-logo", { duration: 1, y: 20, opacity: 0, ease: "power1"});

gsap.from(".page-title", { duration: 1, delay: 0.2, y: 20, opacity: 0, ease: "power1"});

gsap.from(".scrolling-arrow", { duration: 1, delay: 0.2, y: 20, opacity: 0, ease: "power1"});

gsap.to(".scrolling-arrow", {
    delay: 1.2,
    keyframes: [{opacity: 0, duration: 0.5, ease:"power1",}, {opacity: 1, duration: 0.5, ease:"power1"}],
    repeat: 6,
    });

gsap.from(".concept-title", {scrollTrigger: ".concept-title", duration: 1, delay: 0.5, y: 20, opacity: 0, ease: "power1"});

gsap.from(".concept-text", {scrollTrigger: ".concept-text", duration: 1, delay: 0.7, y: 20, opacity: 0, ease: "power1"});