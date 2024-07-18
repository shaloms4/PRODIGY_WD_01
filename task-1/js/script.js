let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () =>{
    navbar.classList.remove('active');
}
const navLinks = document.querySelectorAll('.header .navbar a');

function changeLinkColor(event) {
    event.target.style.color = '#d3ad7f'; 
}

function resetLinkColor(event) {
    event.target.style.color = ''; 
}

navLinks.forEach(link => {
    link.addEventListener('mouseover', changeLinkColor);
    link.addEventListener('mouseout', resetLinkColor);
});
