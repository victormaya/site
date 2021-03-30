if (window.innerWidth > 900) {
  // fixar navbar
  const nav = document.querySelector(".navbar");
  const ghost = document.querySelector(".navbar-ghost");
  const topoNav = nav.offsetTop;

  function navFixed() {
    if (window.pageYOffset >= topoNav) {
      nav.classList.add("navbar-fixed");
      ghost.classList.add("navbar-ghost-ativo");
    } else {
      nav.classList.remove("navbar-fixed");
      ghost.classList.remove("navbar-ghost-ativo");
    }
  }

  // capiturando itens do navbar
  const perfil = document.querySelector("#perfil");
  const skills = document.querySelector("#skills");
  const educacao = document.querySelector("#educacao");
  const experiencia = document.querySelector("#experiencia");
  const portfolio = document.querySelector("#portfolio");
  const contato = document.querySelector("#contato");
  const itemsAll = document.querySelectorAll(".item-navbar");

  function ativarMenu() {
    const pagetop = window.pageYOffset;
    console.log(pagetop);
    if (pagetop < 377) {
      itemsAll.forEach((item) => {
        item.classList.remove("item-navbar-ativo");
      });
      perfil.classList.add("item-navbar-ativo");
    }
    if (pagetop >= 377 && pagetop < 855) {
      itemsAll.forEach((item) => {
        item.classList.remove("item-navbar-ativo");
      });
      skills.classList.add("item-navbar-ativo");
    } else if (pagetop >= 855 && pagetop < 1291) {
      itemsAll.forEach((item) => {
        item.classList.remove("item-navbar-ativo");
      });
      educacao.classList.add("item-navbar-ativo");
    } else if (pagetop >= 1291 && pagetop < 1807) {
      itemsAll.forEach((item) => {
        item.classList.remove("item-navbar-ativo");
      });
      experiencia.classList.add("item-navbar-ativo");
    } else if (pagetop >= 1807) {
      itemsAll.forEach((item) => {
        item.classList.remove("item-navbar-ativo");
      });
      portfolio.classList.add("item-navbar-ativo");
      contato.classList.add("item-navbar-ativo");
    }
  }

  const listaNav = nav.querySelectorAll(".item-navbar");

  const goScroll = (index) => {
    switch (index) {
      case 0:
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        break;
      case 1:
        window.scrollTo({
          top: 377,
          behavior: 'smooth'
        });
        break;
      case 2:
        window.scrollTo({
          top: 855,
          behavior: 'smooth'
        });
        break;
      case 3:
        window.scrollTo({
          top: 1291,
          behavior: 'smooth'
        });
        break;
      case 4:
        window.scrollTo({
          top: 1807,
          behavior: 'smooth'
        });
        break;
      case 5:
        window.scrollTo({
          top: 2000,
          behavior: 'smooth'
        });
        break;
      case 6:
        break;
    }
  };

  listaNav.forEach((item, index) => {
    item.addEventListener("click", () => {
      goScroll(index);
    });
  });

  const sections = document.querySelectorAll(".sessao");
  const separadores = document.querySelectorAll(".separador");
  console.log(separadores);

  const scrollSection = () => {
    const pagetop = window.pageYOffset;
    console.log(pagetop);
    if (pagetop >= 0) {
      sections[0].classList.add("sessao-ativo");
      separadores[0].classList.add("separador-ativo");
      separadores[1].classList.add("separador-ativo");
    }
    if (pagetop >= 66) {
      sections[1].classList.add("sessao-ativo");
      separadores[2].classList.add("separador-ativo");
    }
    if (pagetop >= 452) {
      sections[2].classList.add("sessao-ativo");
      separadores[3].classList.add("separador-ativo");
    }
    if (pagetop >= 959) {
      sections[3].classList.add("sessao-ativo");
      separadores[4].classList.add("separador-ativo");
    }
    if (pagetop >= 1444) {
      sections[4].classList.add("sessao-ativo");
      separadores[5].classList.add("separador-ativo");
    }
  };

  window.onscroll = () => {
    navFixed();
    ativarMenu();
    scrollSection();
  };
} else{
  const sections = document.querySelectorAll(".sessao");
  const separadores = document.querySelectorAll(".separador");
  console.log(separadores);

  const scrollSection = () => {
    const pagetop = window.pageYOffset;
    console.log(pagetop);
    if (pagetop >= 159) {
      sections[0].classList.add("sessao-ativo");
      separadores[0].classList.add("separador-ativo");
      separadores[1].classList.add("separador-ativo");
    }
    if (pagetop >= 424) {
      sections[1].classList.add("sessao-ativo");
      separadores[2].classList.add("separador-ativo");
    }
    if (pagetop >= 844) {
      sections[2].classList.add("sessao-ativo");
      separadores[3].classList.add("separador-ativo");
    }
    if (pagetop >= 1162) {
      sections[3].classList.add("sessao-ativo");
      separadores[4].classList.add("separador-ativo");
    }
    if (pagetop >= 1795) {
      sections[4].classList.add("sessao-ativo");
      separadores[5].classList.add("separador-ativo");
    }
  };

  window.onscroll = () => {
    scrollSection();
  };
}
