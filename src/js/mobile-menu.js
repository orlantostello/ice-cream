(() => {
const menuBtnRef = document.querySelector('[data-menu-button]');
const mobileMenuRef = document.querySelector('[data-menu]');
    const mobileBtnClose = document.querySelector('[data-menu-close]');
    const anchorLinkHome = document.querySelector('.home-link');
    const anchorLinkAbout = document.querySelector('.about-link');
    const anchorLinkAboutMilk = document.querySelector('.about-milk-link');
    const anchorLinkProducts = document.querySelector('.products-link');
    const anchorLinkContact = document.querySelector('.contact-link');
    
    menuBtnRef.addEventListener('click', () => {
        mobileMenuRef.classList.toggle('is-open');
    })
    mobileBtnClose.addEventListener('click', () => {
        mobileMenuRef.classList.toggle('is-open');
    })
    anchorLinkHome.addEventListener('click', () => {
        mobileMenuRef.classList.toggle('is-open');
    })
    anchorLinkAbout.addEventListener('click', () => {
        mobileMenuRef.classList.toggle('is-open');
    })
    anchorLinkAboutMilk.addEventListener('click', () => {
        mobileMenuRef.classList.toggle('is-open');
    })
    anchorLinkProducts.addEventListener('click', () => {
        mobileMenuRef.classList.toggle('is-open');
    })
    anchorLinkContact.addEventListener('click', () => {
        mobileMenuRef.classList.toggle('is-open');
    })
})();