function sidebar() {
    const aboutLink = document.querySelector('#about-link');
    const sidebarLinks = document.querySelectorAll('.sidebar__nav .nav-link');
    let activeLink = aboutLink;
    
    sidebarLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            if(link !== activeLink) {
                activeLink.classList.remove('active-link');
                activeLink = event.target;
                activeLink.classList.add('active-link');
            }
        })
    })
}



sidebar();

const mobileNav = document.querySelector('.mobile__sidebar');


