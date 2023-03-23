const projectElements = document.querySelectorAll(".card-transition");
// const cover = document.querySelector(".my-project-cover");
let i = 1
const opacityChange = (target, number) => {
  target.style.opacity = `${number}`
};
projectElements.forEach((el) => {
el.setAttribute(`id`,`project-${i}`);
i ++
});
i = 1
const projectImages = document.querySelectorAll(".display-project");
projectImages.forEach((el) => {
  el.setAttribute(`id`,`project-display-${i}`);
  console.log(el.id.charAt(el.id.length - 1));
  opacityChange(el, "0");
  i ++;
  });
  i = 1;
opacityChange(projectImages[0], "1")
// const revealElements = () => {

//   projectElements.forEach((el) => {
//     console.log('hi')
//   });
// }
projectElements.forEach((el) => {
  const numb = el.id.charAt(el.id.length - 1);
  console.log(numb)
  const image = document.querySelector(`#project-display-${numb}`);
  // this is for desktop
  el.addEventListener("mouseover", function() {
    projectImages.forEach((element => {
      element.style.opacity = "0"
    }));
    image.style.opacity = "1";
  });

  // This is for mobile
  el.addEventListener("click", function() {
    console.log('hello there')
    projectImages.forEach((element => {
      element.classList.remove(".project-visible")
    }));
    image.classList.toggle(".project-visible")
  } );

});
