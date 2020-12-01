// Animation

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

gsap.from(".concept-title", {
    scrollTrigger: {
        trigger: ".concept-title",
        scrub: true,
        start: "top bottom",
        end: "top center"
      }, 
    y: 20, opacity: 0, ease: "power1"});

gsap.from(".concept-text", {
    scrollTrigger: {
        trigger: ".concept-text",
        scrub: true,
        start: "top bottom",
        end: "top center"
      },
    y: 80, opacity: 0, ease: "power1"});

gsap.from(".structure-title", {
    scrollTrigger: {
        trigger: ".structure-title",
        scrub: true,
        start: "top bottom",
        end: "top center"
        }, 
    y: 20, opacity: 0, ease: "power1"});

gsap.from(".structure-text", {
    scrollTrigger: {
        trigger: ".structure-text",
        scrub: true,
        start: "top bottom",
        end: "top center"
        },
    y: 80, opacity: 0, ease: "power1"});

gsap.from(".structure-diagram", {
    scrollTrigger: {
        trigger: ".structure-diagram",
        scrub: true,
        start: "top bottom",
        end: "top center"
        }, 
    y: 80, opacity: 0, ease: "power1"});

gsap.from(".software-structure-title", {
    scrollTrigger: {
        trigger: ".software-structure-title",
        scrub: true,
        start: "top bottom",
        end: "top center"
        }, 
    y: 20, opacity: 0, ease: "power1"});

gsap.from(".highlight-text-group", {
    scrollTrigger: {
        trigger: ".highlight-text-group",
        scrub: true,
        start: "top bottom",
        end: "top center"
        }, 
    y: 80, opacity: 0, ease: "power1"});

gsap.from(".software-structure-image", {
    scrollTrigger: {
        trigger: ".software-structure-image",
        scrub: true,
        start: "top bottom",
        end: "top center"
        }, 
    y: 80, opacity: 0, ease: "power1"});

// Modal

var modal = document.getElementById("hci-and-virtualization-modal");
var card = document.getElementById("hci-and-virtualization-card");
var closeIcon = document.getElementById("close-icon");

card.onclick = function() {
    modal.style.display = "block";
    document.querySelector("body").style.overflow = 'hidden';
}

closeIcon.onclick = function() {
    modal.style.display = "none";
    document.querySelector("body").style.overflow = 'auto';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.querySelector("body").style.overflow = 'hidden';
    }
}

