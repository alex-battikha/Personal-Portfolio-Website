const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

//Variable created above will be used to listen for 'clicked' event and open menu
navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open')
})

//Removes nav-open so the menu can close after someone clicks on a link from the menu
navLinks.forEach(link=> {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
});