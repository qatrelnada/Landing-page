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

// TODO: Build the navigation menu. 

const sections = document.querySelectorAll('section');
const docFrag = document.createDocumentFragment();

sections.forEach(section => {
  const listItem = document.createElement('li');
  const anchor = document.createElement('a');
  listItem.appendChild(anchor);

  anchor.textContent = section.getAttribute('data-nav');

  anchor.setAttribute('class', 'menu__link');

  const sectId = section.getAttribute('id');
  let refLink = '#'+sectId;
  anchor.setAttribute('href', refLink);
   
  docFrag.appendChild(listItem);
});

const unOrList = document.getElementById('navbar__list')
unOrList.appendChild(docFrag);

//Responsive navbar

function myFunction() {
  let x = document.getElementById("header");
  if (x.className === "page__header") {
    x.className += " responsive";
  } else {
    x.className = "page__header";
  }
}

// TODO: Add the functionality to scroll to sections.

document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});                
  });
});

// TODO: Add functionality to distinguish the section in view.

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

sections.forEach(section => {
  document.addEventListener('scroll', function () {
  
    isInViewport(section) ? section.classList.add('active') : section.classList.remove('active');              
  });
});

// TODO: Add an active state to your navigation items when a section is in the viewport.

  const links = document.querySelectorAll('a');

  links.forEach(link => {
    document.addEventListener('scroll', function () {
    const section = document.querySelector(link.hash);
    isInViewport(section) ? link.classList.add('active') : link.classList.remove('active');                            
  });
});

// TODO: Add a scroll to top button on the page that’s only visible when the user scrolls below the fold of the page.

//Get the button
topBtn = document.getElementById('topBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? topBtn.style.display = 'block' : topBtn.style.display = 'none';            
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// TODO: Make sections collapsible.

const coll = document.getElementsByClassName('collapsible');

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function() {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    content.style.maxHeight ? content.style.maxHeight = null : content.style.maxHeight = content.scrollHeight + 'px';                    
  });
}

// TODO: Hide fixed navigation bar while not scrolling
/*
// Setup isScrolling variable
var isScrolling;

// Listen for scroll events
window.addEventListener('scroll', function ( event ) {

	// Clear our timeout throughout the scroll
	window.clearTimeout( isScrolling );

	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {

    document.getElementById('myTopnav').style.display='none';

		// Run the callback
		console.log( 'Scrolling has stopped.' );

	}, 3000);

}, false);
*/