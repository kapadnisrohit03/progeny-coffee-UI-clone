
let cart = document.getElementsByClassName("cartBTN");
// cart.


// Animation for first image of the website's Home Page
const imageContainer = document.querySelector('.image-one img');
gsap.from(imageContainer, {
  scale: 1.7,
  y: -50,
  scrollTrigger: {
    trigger: ".image-one img",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  }
})


// let hamburger = getElementsByClassName('ri-menu-line')
// let shop = document.getElementsByClassName('shop')
// let navLi = document.getElementsByClassName('navLi')

// hamburger.addEventListener('click', ()=>{
//   shop.classList.toggle('shop')
//   navLi.classList.toggle('navLi')
// })



