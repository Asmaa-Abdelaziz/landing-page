/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
// SELECTORS
let myNav = document.getElementById("navbar__list");
let navedSections = document.querySelectorAll("section");

/***************CREATE NAV BAR*****************/
// adding nav items depending on the number of sections
function createNavs() {
  for (let navNum = 1; navNum <= navedSections.length; navNum++) {
    //console.log(navNum); //check the number of nav sections = number of sections
    let navBulls = document.createElement("li"); // create a li element inside ul element
    let navText = document.createTextNode("Section " + navNum); // text for naming every item on this nav
    // append all child to its parent node
    navBulls.appendChild(navText);
    myNav.appendChild(navBulls);
    navBulls.style.setProperty("display", "inline-block"); // to display lists as an inline block
    navBulls.className = `menu__link ${navedSections[navNum - 1].id}`; // menu__link to accecpt styling given,, adding class depending on the section number
  }
}
createNavs();

/***********NAV ITEM NAVIGATES TO ITS SECTION***********/
/*
1- select all li elements > navLinkItems
2- add event listener on li item when click on it scroll to section that have same name
*/
function navLinkSection() {
  let navLinkItems = document.querySelectorAll("li");
  for (
    let itemsCounter = 0;
    itemsCounter < navLinkItems.length;
    itemsCounter++
  ) {
    navLinkItems[itemsCounter].addEventListener("click", function () {
      navedSections[itemsCounter].scrollIntoView({ behavior: "smooth" });
    });
  }
}
navLinkSection();

/******ADDING ACTIVE TO NAVIGATION ITEMS AND SECTION******/
/*
/***********MDN/
> .getBoundingClientRect() > https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
> finding Intersection Observer API best for avoid performance problem
https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
*/

// THE BASIC STRUCTURE > this function take a callback function and options
let options = {
  threshold: 0.65, // only be active when 65% of section observed while scrolling
};

function callbackFunction(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("your-active-class");
      document.querySelector(`.${entry.target.id}`).classList.add("active");
    } else {
      entry.target.classList.remove("your-active-class");
      document.querySelector(`.${entry.target.id}`).classList.remove("active");
    }
  });
}
// calling the IntersectionObserver and give it the callback function and options
let observer = new IntersectionObserver(callbackFunction, options);

navedSections.forEach((section) => observer.observe(section));

/**********GO TOP SMOTHLLY*********/
let toTopButton = document.getElementById("to-top");
toTopButton.addEventListener("click", function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
/**
 * End Global variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
