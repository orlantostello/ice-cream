(() => {
  const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      openModalMobBtn: document.querySelector('[mobile-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.openModalMobBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('backdrop--hidden');
  }
})();

    // Отправка HTML-формы без перезагрузки страницы
(() => {
         document
            .querySelector('.js-feedback-form')
            .addEventListener('submit', e => {
                e.preventDefault();

                new FormData(e.currentTarget).forEach((value, name) =>
                    console.log('${name}: ${value}'),
                );
            });
    })();