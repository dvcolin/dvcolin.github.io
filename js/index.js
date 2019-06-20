function sidebar() {
    const aboutLink = document.querySelector('#about-link');
    const sidebarLinks = document.querySelectorAll('.sidebar__nav .nav-link');
    const ghLink = document.querySelector('#gh-link');
    let activeLink = aboutLink;
    
    
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
}



sidebar();

const aboutButton = document.querySelector('.about__button');

aboutButton.addEventListener('mouseover', () => {
    aboutButton.classList.toggle('shadow-drop-2-center');
});

aboutButton.addEventListener('mouseout', () => {
    aboutButton.classList.toggle('shadow-drop-2-center');
})


