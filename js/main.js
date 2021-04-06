const menu = document.getElementById('menu');
const nav = document.querySelector('.nav-links');
document.onclick = function(e){
    if(e.target.id !== 'nav' && e.target.id !== 'menu'){
        menu.classList.remove('active');
    nav.classList.remove('active');
    }
}
menu.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    nav.classList.toggle('active');
});



const navbarMenu = document.querySelector(".nav-links");
const navbarLinks = document.querySelectorAll(".nav-link");
for(let i=0; i<navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navbarLinkClick);
}
function navbarLinkClick(event) {
  smoothScroll(event);
}
function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href")==="#" ? "header" : event.currentTarget.getAttribute("href");
  console.log(event);
  const targetPosition = document.querySelector(targetId).offsetTop;
  console.log(targetPosition)
  const startPosition = window.pageYOffset;
  console.log(startPosition)
  const distance = targetPosition - startPosition;
  console.log(distance)
  const duration = 1000;
  let start = null;
  window.requestAnimationFrame(step);
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    console.log(progress)
    // window.scrollTo(0, distance*(progress/duration) + startPosition);
    window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}
function linear(t, b, c, d) {
	return c*t/d + b;
};

function easeInOutQuad(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};