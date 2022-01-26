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
  const education = document.querySelector("a[href='#education'] span");
  const portfolio = document.querySelector("a[href='#portfolio'] span");
  const contact = document.querySelector("a[href='#contact'] span");
  home.textContent = data[attr].nav.home;
  about.textContent = data[attr].nav.about;
  skills.textContent = data[attr].nav.skills;
  education.textContent = data[attr].nav.education;
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
  const about__subtitle = document.querySelector(".about .section__subtitle");
  const about__description = document.querySelector(
    ".about .about__description"
  );
  const about__button = document.querySelector(".about__buttons a");
  about__title.textContent = data[attr].about.about__title;
  about__subtitle.textContent = data[attr].about.section__subtitle;
  about__description.textContent = data[attr].about.about__description;
  about__button.textContent = data[attr].about.about__button;

  //Skills
  const skills__title = document.querySelector(".skills .section__title");
  const another__tools = document.querySelector(".skills__title.other__skills");
  skills__title.textContent = data[attr].skills.skills__title;
  another__tools.textContent = data[attr].skills.another__tools;

  //Qualification
  const qualification__title = document.querySelector(
    ".qualification .section__title"
  );
  const qualification__title_1 = document.querySelector(
    ".qualification__title:nth-of-type(1)"
  );
  const qualification__subtitle_1 = document.querySelector(
    ".qualification__title:nth-of-type(1) ~ .qualification__subtitle:nth-of-type(2)"
  );
  qualification__title.textContent =
    data[attr].qualification.qualification__title;
  qualification__title_1.textContent =
    data[attr].qualification.qualification__title_1;
  qualification__subtitle_1.textContent =
    data[attr].qualification.qualification__subtitle_1;

  //Portfolio
  const portfolio__title = document.querySelector(".portfolio .section__title");
  const portfolio__subtitle = document.querySelector(
    ".portfolio .section__subtitle"
  );
  portfolio__title.textContent = data[attr].portfolio.portfolio__title;
  portfolio__subtitle.textContent = data[attr].portfolio.portfolio__subtitle;

  //Contact
  const contact__title = document.querySelector(".contact .section__title");
  const contact__tel = document.querySelector(
    ".contact__information:nth-of-type(1) .contact__title"
  );
  const contact__loc = document.querySelector(
    ".contact__information:nth-of-type(3) .contact__title"
  );
  const contact__button = document.querySelector(".contact__button a");
  contact__title.textContent = data[attr].contact.contact__title;
  contact__tel.textContent = data[attr].contact.contact__tel;
  contact__loc.textContent = data[attr].contact.contact__loc;
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
