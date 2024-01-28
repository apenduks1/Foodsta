(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-open-order]'),
    closeModalBtn: document.querySelector('[data-close-order]'),
    backdrop2: document.querySelector('[data-backdrop-order]'),
  };
  refs.closeModalBtn.addEventListener('click', toggleModal1);

  function toggleModal1() {
    refs.backdrop2.classList.toggle('is-hidden-order');
  }
  refs.openModalBtn.forEach(elem =>
    elem.addEventListener('click', toggleModal1)
  );
})();