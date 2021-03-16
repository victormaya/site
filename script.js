const nav = document.querySelector(".navbar");
const ghost = document.querySelector('.navbar-ghost')
const topoNav = nav.offsetTop;

function navFixed() {
  console.log(topoNav, window.pageYOffset)
  if (window.pageYOffset >= topoNav) {
    nav.classList.add("navbar-fixed");
    ghost.classList.add('navbar-ghost-ativo')
  } else {
    nav.classList.remove("navbar-fixed");
    ghost.classList.remove('navbar-ghost-ativo')
  }
}

window.onscroll = () => {
  navFixed();
};
