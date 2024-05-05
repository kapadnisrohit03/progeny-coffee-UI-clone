
let cart = document.getElementsByClassName("cartBTN");
// cart.


// Animation for first image of the website's Home Page
const imageContainer = document.querySelector('.image-one img');
gsap.from(imageContainer, {
  scale: 1.2,
  scrollTrigger: {
    trigger: ".image-one img",
    start: "top bottom",
    end: "bottom top",  
    scrub: true,
  }
})





