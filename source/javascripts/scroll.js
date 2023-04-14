
const navbar = document.querySelector(".sidenav")
let oldScrollY = 0;
window.onscroll = function(e) {
  console.log(oldScrollY)
  if (oldScrollY < window.scrollY) {
    navbar.classList.add("slide-off")
  } else if (oldScrollY > window.scrollY) {
    navbar.classList.remove("slide-off")
  }
  oldScrollY = window.scrollY
}
  function smoothScroll(el){
    console.log(el);
    el.scrollIntoView(true);
    console.log('scrolling')
}
const sectionOne = document.querySelector("#section-1")
const sectionTwo = document.querySelector("#section-2")
const sectionThree = document.querySelector("#section-3")

const aboutBtn = document.querySelector("#about-btn")
const aboutText = document.querySelector(".about-text")
const presentationBtn = document.querySelector("#presentation-btn")
const presentationText = document.querySelector(".presentation-text")
const projectBtn = document.querySelector("#project-btn")
const projectText = document.querySelector(".project-text")
console.log(aboutBtn)
console.log(aboutText)

aboutBtn.addEventListener("mouseover", function() {
  aboutText.style.opacity = "1"
})
aboutBtn.addEventListener("mouseout", function() {
  aboutText.style.opacity = "0"
})
aboutBtn.onclick = function() {
  console.log(sectionOne)
  smoothScroll(sectionOne)
}
// presentation
presentationBtn.addEventListener("mouseover", function() {
  presentationText.style.opacity = "1"
})
presentationBtn.addEventListener("mouseout", function() {
  presentationText.style.opacity = "0"
})
presentationBtn.onclick = function() {
  console.log(sectionOne)
  smoothScroll(sectionTwo)
}

//project
projectBtn.addEventListener("mouseover", function() {
  projectText.style.opacity = "1"
})
projectBtn.addEventListener("mouseout", function() {
  projectText.style.opacity = "0"
})
projectBtn.onclick = function() {
  console.log(sectionOne)
  smoothScroll(sectionThree)
}
