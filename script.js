
// const navSlide = () =>{
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links');
// 	const navLinks = document.querySelectorAll('.nav-links li')
// 	// toggle nav
// 	burger.addEventListener('click', () => {
// 		nav.classList.toggle('nav-active');
// 	});
// 	// animate links
// 	navLinks.forEach((link, index)=>{
// 		link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.6}s`;
// 	});
// }

// navSlide();


// window.addEventListener('DOMContentLoaded', function () {
// 	  const scrollBtn = document.querySelector('.scrollToTop-btn')
// 	  window.addEventListener('scroll', () => {
// 		  scrollBtn.classList.toggle('active', window.scrollY > 500)
// 	  })
// 	  scrollBtn.addEventListener('click', () => {
// 		  document.body.scrollTop = 0;
// 		  document.documentElement.scrollTop = 0;
// 	  })
	  
	  
	  
// 	  window.addEventListener('DOMContentLoaded', function () {
// 		  window.addEventListener('scroll', function() {
// 			const header = document.querySelector('header');
// 			header.classList.toggle('sticky1', window.scrollY > 0)
// 		  })
// 	  })
//   })


window.addEventListener('DOMContentLoaded', function () {
	window.addEventListener('scroll', function() {
	  const header = document.querySelector('header');
	  header.classList.toggle('sticky', window.scrollY > 0)
	})
  
  
	  const menuBtn = document.querySelector('.menu-btn')
	  const navigation = document.querySelector('.nav-links')
	  const navigationItems = document.querySelectorAll('.nav-links a')
  
	  menuBtn.addEventListener('click', () => {
	  menuBtn.classList.toggle('active')
	  navigation.classList.toggle('active')
	  })
	  navigationItems.forEach(navItem => {
		  navItem.addEventListener('click', () => {
			menuBtn.classList.remove('active')
			navigation.classList.remove('active')
		  })
	  })
  
	  const scrollBtn = document.querySelector('.scrollToTop-btn')
	  window.addEventListener('scroll', () => {
		  scrollBtn.classList.toggle('active', window.scrollY > 350)
	  })
	  scrollBtn.addEventListener('click', () => {
		  document.body.scrollTop = 0;
		  document.documentElement.scrollTop = 0;
	  })
	  
	  
	  
	  window.addEventListener('scroll', () => {
		  let reveals = document.querySelector('.reveal')
  
		  for(let i = 0; i< reveals.length; i++) { 
			  let windowHeight = window.innerHeight;
			  let revealTop = reveals[i].getBoundingClientReact().top;
			  let revealPoint = 50;
  
			  if(revealTop < windowHeight - revealPoint) {
				  reveals[i].classList.add('active')
			  }
		  }
	  })
	  window.addEventListener('DOMContentLoaded', function () {
		  window.addEventListener('scroll', function() {
			const header = document.querySelector('header');
			header.classList.toggle('sticky1', window.scrollY > 0)
		  })
	  })
  })
