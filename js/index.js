const aboutLink = document.querySelector('#about-link');
const sidebarLinks = document.querySelectorAll('.sidebar__nav .nav-link');
const ghLink = document.querySelector('#gh-link');
let activeLink = aboutLink;

const sidebar = document.querySelector('.sidebar');
const aboutButton = document.querySelector('.about__button');

const aboutHeader = document.querySelector('.about__header');

const socialLinks = document.querySelectorAll('.social-link');
    
sidebarLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.stopPropagation();
            if(link !== activeLink && link !== ghLink) {
                activeLink.classList.remove('active-link');
                activeLink = event.target;
                activeLink.classList.add('active-link');
            }
        })
    })





