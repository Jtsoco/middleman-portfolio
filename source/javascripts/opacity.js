const scrollElements = document.querySelectorAll(".js-scroll");
console.log(scrollElements);
scrollElements.forEach((el) => {
  console.log('hi');
  el.style.opacity ="0"
});
console.log('hi')
const elementInView = (el, percentageScroll = 90) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
  );
};
const displayScrollElement = (element) => {
  element.classList.add("scrolled");
  element.style.opacity ="1";
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
  element.style.opacity ="0"
};
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    console.log(el)
    if (elementInView(el, 90)) {
      displayScrollElement(el);
    } else {
    hideScrollElement(el);
  }
  })
};
  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });
