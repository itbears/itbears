// Скролл для якоря в safari
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

// Плавный скролл для страницы. Предустановка npm install smoothscroll-polyfill для safari
document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function (e) {
        document.querySelector('.header').classList.remove('header__active')
        document.querySelector("body").classList.remove("scroll-off")
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        // const topOffset = document.querySelector('.scrollto').offsetHeight;
        const topOffset = 50; // если не нужен отступ сверху, либо число в px
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});