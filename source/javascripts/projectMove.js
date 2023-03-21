const projectElements = document.querySelectorAll(".card-transition");
// const cover = document.querySelector(".my-project-cover");
let i = 1
projectElements.forEach((el) => {
el.setAttribute(`id`,`project-${i}`);
i ++
});
i = 1
const projectImages = document.querySelectorAll(".display-project");
projectImages.forEach((el) => {
  el.setAttribute(`id`,`project-display-${i}`);
  console.log(el.id.charAt(el.id.length - 1));
  el.style.opacity = "0";
  i ++;
  });
  i = 1;


// const revealElements = () => {

//   projectElements.forEach((el) => {
//     console.log('hi')
//   });
// }
projectElements.forEach((el) => {
  el.addEventListener("mouseover", function() {
    const numb = el.id.charAt(el.id.length - 1);
    const image = document.querySelector(`#project-display-${numb}`);
    image.style.opacity = "1";
  });
  el.addEventListener("mouseout", function() {
    const numb = el.id.charAt(el.id.length - 1);
    const image = document.querySelector(`#project-display-${numb}`);
    image.style.opacity = "0";
  });

});
