function toggleMobileMenu() {
    const menu = document.getElementById('mobileNavMenu');
    const overlay = document.getElementById('mobileNavOverlay');
    const closeBtn = document.getElementById('closeNavMenuBtn');

    if (!menu || !overlay) return;

    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    } else {
        menu.classList.add('open');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

function closeMobileMenu() {
    const menu = document.getElementById('mobileNavMenu');
    const overlay = document.getElementById('mobileNavOverlay');
    if (menu) menu.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
}

// Закрытие по клику на крестик и оверлей
document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.getElementById('closeNavMenuBtn');
    const overlay = document.getElementById('mobileNavOverlay');
    if (closeBtn) closeBtn.onclick = closeMobileMenu;
    if (overlay) overlay.onclick = closeMobileMenu;
});

// Simple hero slider fallback: rotates placeholder slides and updates dots
document.addEventListener('DOMContentLoaded', function () {
    const slides = [
        { img: 'img/sam.png', title: 'Kugoo Kirin' },
        { img: 'https://via.placeholder.com/700x420/ffffff/5d59d4?text=Model+2', title: 'Model 2' },
        { img: 'https://via.placeholder.com/700x420/ffffff/5d59d4?text=Model+3', title: 'Model 3' },
        { img: 'https://via.placeholder.com/700x420/ffffff/5d59d4?text=Model+4', title: 'Model 4' },
        { img: 'https://via.placeholder.com/700x420/ffffff/5d59d4?text=Model+5', title: 'Model 5' }
    ];

    let current = 0;
    const heroImg = document.querySelector('.hero-scooter-img');
    const dots = document.querySelector('.slider-dots');
    const arrows = document.querySelectorAll('.arrow-btn');

    function updateSlider() {
        if (heroImg && slides[current]) {
            heroImg.src = slides[current].img;
            heroImg.alt = slides[current].title;
        }
        if (dots) dots.textContent = (current + 1) + ' — ' + slides.length;
    }

    arrows.forEach(btn => btn.addEventListener('click', function () {
        const isPrev = this.textContent.trim().indexOf('<') !== -1 || this.textContent.trim().indexOf('◀') !== -1;
        if (isPrev) current = (current - 1 + slides.length) % slides.length;
        else current = (current + 1) % slides.length;
        updateSlider();
    }));

    // allow keyboard arrows when hero is focused
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') { current = (current - 1 + slides.length) % slides.length; updateSlider(); }
        if (e.key === 'ArrowRight') { current = (current + 1) % slides.length; updateSlider(); }
    });

    updateSlider();
});