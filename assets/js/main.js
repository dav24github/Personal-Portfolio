/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close"),
  lang = document.getElementById("nav-menu-lang"),
  langItems = document.getElementById("nav-menu-langItems"),
  body = document.querySelector("body");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*===== SHOW LANG =====*/
if (lang) {
  lang.addEventListener("click", (e) => {
    if (!e) e = window.event;
    e.stopPropagation();

    if (langItems.className === "nav__link-lang lang-open") {
      langItems.classList.remove("lang-open");
    } else {
      langItems.classList.add("lang-open");
    }
  });
}
/*===== Hiden LANG =====*/
if (body) {
  body.addEventListener("click", (e) => {
    langItems.classList.remove("lang-open");
  });
}

/*===== CHANGE LANG =====*/
/*data from db.js*/
function myFunction(event) {
  const attr = event.target.getAttribute("language");
  //nav
  const home = document.querySelector("a[href='#home'] span");
  const about = document.querySelector("a[href='#about'] span");
  const skills = document.querySelector("a[href='#skills'] span");
  const services = document.querySelector("a[href='#services'] span");
  const portfolio = document.querySelector("a[href='#portfolio'] span");
  const contact = document.querySelector("a[href='#contact'] span");
  console.log(attr);
  console.log(data[attr]);
  home.textContent = data[attr].nav.home;
  about.textContent = data[attr].nav.about;
  skills.textContent = data[attr].nav.skills;
  services.textContent = data[attr].nav.services;
  portfolio.textContent = data[attr].nav.portfolio;
  contact.textContent = data[attr].nav.contact;

  //home
  const homeTitle = document.querySelector(".home__title");
  const home__description = document.querySelector(".home__description");
  const btn_contactme = document.querySelector(
    ".home__data a[href='#contact']"
  );
  const home__scroll = document.querySelector(".home__scroll-name");
  homeTitle.textContent = data[attr].home.home_title;
  home__description.textContent = data[attr].home.home__description;
  btn_contactme.textContent = data[attr].home.btn_contactme;
  home__scroll.textContent = data[attr].home.home__scroll;

  //About
  const about__title = document.querySelector(".about .section__title");
  const about__description = document.querySelector(
    ".about .about__description"
  );
  const qualification__profile = document.querySelector(
    ".about .qualification__profile"
  );

  const qualification__education = document.querySelector(
    ".about .qualification__education"
  );
  const qualification__title_1 = document.querySelector(
    ".about .qualification__title-1"
  );
  const qualification__subtitle_1 = document.querySelector(
    ".about .qualification__subtitle-1"
  );
  const qualification__calendar_1 = document.querySelector(
    ".about .qualification__calendar-1"
  );
  const qualification__title_2 = document.querySelector(
    ".about .qualification__title-2"
  );
  const qualification__subtitle_2 = document.querySelector(
    ".about .qualification__subtitle-2"
  );
  const qualification__calendar_2 = document.querySelector(
    ".about .qualification__calendar-2"
  );

  const about__button = document.querySelector(".about__buttons a");
  about__title.textContent = data[attr].about.about__title;
  about__description.textContent = data[attr].about.about__description;
  about__button.textContent = data[attr].about.about__button;
  qualification__profile.innerHTML = data[attr].about.qualification__profile;
  qualification__education.innerHTML = data[attr].about.qualification__education;
  qualification__title_1.textContent = data[attr].about.qualification__title_1;
  qualification__subtitle_1.textContent = data[attr].about.qualification__subtitle_1;
  qualification__calendar_1.textContent = data[attr].about.qualification__calendar_1;
  qualification__title_2.textContent = data[attr].about.qualification__title_2;
  qualification__subtitle_2.innerHTML = data[attr].about.qualification__subtitle_2;
  qualification__calendar_2.textContent = data[attr].about.qualification__calendar_2;
  
  //Skills
  const skills__title = document.querySelector(".skills .section__title");
  const another__tools = document.querySelector(".skills__title.other__skills");
  skills__title.textContent = data[attr].skills.skills__title;
  another__tools.textContent = data[attr].skills.another__tools;
  
  //Services
  const services__title = document.querySelector(".services .section__title");
  const services__title_1 = document.querySelector(".services .services__title-1");
  const services__title_2 = document.querySelector(".services .services__title-2");
  const services__title_3 = document.querySelector(".services .services__title-3");
  const services__button = document.querySelectorAll(".services .services__button");
  const services__modal_title_1 = document.querySelector(".services .services__modal-title-1");
  const services__modal_title_2 = document.querySelector(".services .services__modal-title-2");
  const services__modal_title_3 = document.querySelector(".services .services__modal-title-3");
  const services__modal_1 = document.querySelector(".services .services__modal-1");
  const services__modal_2 = document.querySelector(".services .services__modal-2");
  const services__modal_3 = document.querySelector(".services .services__modal-3");
  const services__modal_4 = document.querySelector(".services .services__modal-4");
  const services__modal_5 = document.querySelector(".services .services__modal-5");
  const services__modal_6 = document.querySelector(".services .services__modal-6");
  const services__modal_7 = document.querySelector(".services .services__modal-7");
  const services__modal_8 = document.querySelector(".services .services__modal-8");
  
  services__title.textContent = data[attr].services.services__title;
  services__title_1.innerHTML = data[attr].services.services__title_1;
  services__title_2.innerHTML = data[attr].services.services__title_2;
  services__title_3.innerHTML = data[attr].services.services__title_3;
  services__button.forEach((btn)=>{
    btn.innerHTML = data[attr].services.services__button;
  })
  services__modal_title_1.innerHTML = data[attr].services.services__modal_title_1;
  services__modal_title_2.innerHTML = data[attr].services.services__modal_title_2;
  services__modal_title_3.innerHTML = data[attr].services.services__modal_title_3;
  services__modal_1.innerHTML = data[attr].services.services__modal_1;
  services__modal_2.innerHTML = data[attr].services.services__modal_2;
  services__modal_3.innerHTML = data[attr].services.services__modal_3;
  services__modal_4.innerHTML = data[attr].services.services__modal_4;
  services__modal_5.innerHTML = data[attr].services.services__modal_5;
  services__modal_6.innerHTML = data[attr].services.services__modal_6;
  services__modal_7.innerHTML = data[attr].services.services__modal_7;
  services__modal_8.innerHTML = data[attr].services.services__modal_8;
 
  //Portfolio
  const portfolio__title = document.querySelector(".portfolio .section__title");
  const portfolio__subtitle = document.querySelector(
    ".portfolio .section__subtitle"
  );
  portfolio__title.textContent = data[attr].portfolio.portfolio__title;
  portfolio__subtitle.textContent = data[attr].portfolio.portfolio__subtitle;

  //Contact
  const contact__title = document.querySelector(".contact .section__title");
  const contact__subtitle = document.querySelector(".contact .section__subtitle");
  const contact__button = document.querySelector(".contact__button a");
  contact__title.textContent = data[attr].contact.contact__title;
  contact__subtitle.textContent = data[attr].contact.contact__subtitle;
  contact__button.textContent = data[attr].contact.contact__button;

  //Footer
  const footer__link_portfolio = document.querySelector(
    ".footer__links a[href='#portfolio']"
  );
  const footer__link_contact = document.querySelector(
    ".footer__links a[href='#contact']"
  );
  const footer__subtitle = document.querySelector(".footer__subtitle");
  footer__link_portfolio.textContent = data[attr].nav.portfolio;
  footer__link_contact.textContent = data[attr].nav.contact;
  footer__subtitle.textContent = data[attr].home.home__description;
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContents) => {
      tabContents.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  } else {
    this.parentNode.className = "skills__content skills__close";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== PORTFOLIO SWIPER  ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
// function scrollTop() {
//   const scrollTop = document.getElementById("scroll-top");
//   // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
//   if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
//   else scrollTop.classList.remove("show-scroll");
// }
// window.addEventListener("scroll", scrollTop);
