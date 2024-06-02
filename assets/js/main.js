/* MENU SHOW */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/*----- ANIMATE -----*/
// OVERLAY
gsap.to(".first", 1.5, { delay: 0.5, top: "-100%", ease: Expo.easeInOut });
gsap.to(".second", 1.5, { delay: 0.7, top: "-100%", ease: Expo.easeInOut });
gsap.to(".third", 1.5, { delay: 0.9, top: "-100%", ease: Expo.easeInOut });

// IMG
gsap.from(".home__img", { opacity: 0, duration: 2, delay: 2, x: 60 });

// INFORMATION
gsap.from(".home__information", { opacity: 0, duration: 3, delay: 2.3, y: 25 });
gsap.from(".anime-text", {
  opacity: 0,
  duration: 3,
  delay: 2.3,
  y: 25,
  ease: "expo.out",
  stagger: 0.3,
});

// NAV ITEM
gsap.from(".nav__logo", {
  opacity: 0,
  duration: 3,
  delay: 3.2,
  y: 25,
  ease: "expo.out",
});
gsap.from(".nav__item", {
  opacity: 0,
  duration: 1,
  delay: 1,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});

// SOCIAL
gsap.from(".home__social-icon", {
  opacity: 0,
  duration: 2,
  delay: 2,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});

// RESUME
gsap.from(".resume__section__heading ", {
  opacity: 0,
  duration: 1,
  delay: 1,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});

gsap.from(".resume__experiance ", {
  opacity: 0,
  duration: 1,
  delay: 3,
  x: 60,
  ease: "expo.out",
  stagger: 0.2,
});

gsap.from(".resume__experiance__circle ", {
  opacity: 0,
  duration: 1,
  delay: 1,
  x: 60,
  ease: "expo.out",
  stagger: 0.2,
});

gsap.from(".resume__experiance__triangle", {
  opacity: 0,
  duration: 1,
  delay: 1,
  x: 60,
  ease: "expo.out",
  stagger: 0.2,
});

gsap.from(".resume__experiance__content__time ", {
  opacity: 0,
  duration: 1,
  delay: 5,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});

gsap.from(".resume__timeline__ruler", {
  opacity: 0,
  duration: 1,
  delay: 4,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});

gsap.from("hr", {
  opacity: 0,
  duration: 1,
  delay: 2,
  x: 60,
  ease: "expo.out",
  stagger: 0.2,
});

gsap.from(".skill_list", {
  opacity: 0,
  duration: 1,
  delay: 2,
  x: 60,
  ease: "expo.out",
  stagger: 0.2,
});

// PROJECTS
gsap.from(".projects__section__odd", {
  opacity: 0,
  duration: 1,
  delay: 1,
  x: 60,
  ease: "expo.out",
  stagger: 0.2,
});

gsap.from(".projects__section__even", {
  opacity: 0,
  duration: 1,
  delay: 1,
  x: -60,
  ease: "expo.out",
  stagger: 0.2,
});

gsap.from(".projects__image", {
  opacity: 0,
  duration: 1,
  delay: 1,
  y: 20,
  ease: "expo.out",
  stagger: 0.2,
});

gsap.from(".projects__description .name a", {
  opacity: 0,
  duration: 1,
  delay: 2,
  ease: "expo.out",
  stagger: 0.2,
});

// CONTACT

gsap.from(".contact__links", {
  opacity: 0,
  duration: 1,
  delay: 2,
  ease: "expo.out",
  stagger: 0.2,
});

gsap.from(".contact__mailform", {
  opacity: 0,
  duration: 1,
  delay: 2,
  ease: "expo.out",
  stagger: 0.2,
});
