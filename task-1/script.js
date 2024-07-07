function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const navText = document.querySelector('.nav-text');
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        navText.style.display = 'block';
    } else {
        navText.style.display = 'none';
    }
}

const navText = document.querySelector('.nav-text');
navText.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.remove('active');
    navText.style.display = 'none';
});

const navLinksItems = document.querySelectorAll('.nav-links a');
navLinksItems.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.borderRadius = '20px';
        link.style.backgroundColor = 'white';
        link.style.color = '#111';
    });

    link.addEventListener('mouseout', () => {
        link.style.borderRadius = '10px';
        link.style.backgroundColor = 'transparent';
        link.style.color = 'white';
    });
});

const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('mouseover', () => {
    ctaButton.style.backgroundColor = '#0d47a1';
    ctaButton.style.transform = 'scale(1.05)';
});

ctaButton.addEventListener('mouseout', () => {
    ctaButton.style.backgroundColor = '#1a73e8';
    ctaButton.style.transform = 'scale(1)';
});
