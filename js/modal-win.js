const modalLink = document.querySelector('.modal-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
let unlock = true;
const timeout = 800;

modalLink.addEventListener('click', function (e) {
  let modal = document.querySelector('.modal');
  modalOpen(modal);
  e.preventDefault();
});
const modalCloseIcon = document.querySelector('.close-modal');
const el = modalCloseIcon;
el.addEventListener('click', function (e) {
  modalClose(el.closest('.modal'));
  e.preventDefault();
});

function modalOpen(curentModal) {
  if (curentModal && unlock) {
    const modalActive = document.querySelector('.modal');
    if (modalActive) {
      modalClose(modalActive, false);
    } else {
      bodyLock();
    }
    curentModal.classList.add('open');
    curentModal.addEventListener('click', function (e) {
      if (!e.target.closest('.modal-content')) {
        modalClose(e.target.closest('.modal'));
      }
    });
  }
}

function modalClose(modalActive, doUnlock = true) {
  if (unlock) {
    modalActive.classList.remove('open');
    if (doUnlock) {
      bodyUnlock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue =
    window.innerWidth -
    document.querySelector('.wrapper-medium').offsetWidth +
    'px';

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnlock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
    }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    const modalActive = document.querySelector('.modal.open');
    modalClose(modalActive);
  }
});