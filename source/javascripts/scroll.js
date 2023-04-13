const sectionElements = document.querySelectorAll(".section");
console.log(sectionElements);
sectionElements[0].classList.add("current-page");
let scrollY = 0;
sectionElements.forEach((element) => {
  console.log('add')
  element.addEventListener("wheel", function(event) {
console.log(event);
console.log('hi');
  });
})
