const sectionElements = document.querySelectorAll(".section");
console.log(sectionElements);
sectionElements[0].classList.add("current-page");
let oldScrollY = 0;
let goUp = false
sectionElements.forEach((element) => {
  console.log('add')
  element.addEventListener("wheel", function(event) {
    if (element.classList.contains("current-page")) {

    }
  });
})

window.onscroll = function(e) {
  if(oldScrollY < window.scrollY){
    goUp = false;
  } else {
      goUp = true;
  }
  oldScrollY = window.scrollY
  console.log(goUp)
  }
