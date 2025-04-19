// mobile menu
let close = document.getElementById("cancel");

close.addEventListener("click", () => {
  mobileMenu.classList.add("-translate-x-[10000px]");
  document.body.classList.toggle("overflow-hidden");
});

// toggle menu
let toggleMenuBtn = document.getElementById("toggle-menu-btn");
toggleMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("-translate-x-[10000px]");
  document.body.classList.toggle("overflow-hidden");
});

// scroll code
let firstNavigation = document.getElementById("first-navigation");
window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  let clasListNavigation = ["shadow-xl", "shadow-white/30", "bg-neutral-900"];
  if (scroll >= 68) {
    firstNavigation.classList.add(clasListNavigation[0]);
    firstNavigation.classList.add(clasListNavigation[1]);
    firstNavigation.classList.add(clasListNavigation[2]);
  } else {
    firstNavigation.classList.remove(clasListNavigation[0]);
    firstNavigation.classList.remove(clasListNavigation[1]);
    firstNavigation.classList.remove(clasListNavigation[2]);
  }
});

// mobile menu link activation
let mobileMenu = document.getElementById("mobile-menu");
let mobileMenuLinks = mobileMenu.querySelectorAll("a");
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    mobileMenu.classList.toggle("-translate-x-[10000px]");
    document.body.classList.remove("overflow-hidden");
    mobileMenuLinks.forEach((allLinks) => {
      allLinks.classList.remove("bg-neutral-800");
    });

    event.target.classList.toggle("bg-neutral-800");
  });
});
