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
  let currentPage = document.querySelector(".current-page")
  if (goUp == false && !isLastChild(currentPage)) {
    currentPage.nextElementSibling.classList.add("current-page");
    currentPage.classList.remove("current-page")
  } else if (goUp == true && !isFirstChild(currentPage)) {
    currentPage.previousElementSibling.classList.add("current-page");
    currentPage.classList.remove("current-page")
  }
  // TODO add it so the page moves to the next current page, and current page changes wit this
  };

  function isLastChild(el) {
    return (el === el.parentNode.children[el.parentNode.children.length-1])
  }
  function isFirstChild(el) {
    return (el === el.parentNode.children[0])
  }
