const modalTrigger = document.querySelectorAll('#basket'),
      modal = document.querySelector('.modal'),
      modalCloseBtn = document.querySelectorAll('[data-close]');

function openModal() {
modal.classList.add('show');
modal.classList.remove('hide');
document.body.style.overflow = 'hidden';
}

modalTrigger.forEach(btn  => {
btn.addEventListener('click', openModal);
});

function closeModal() {
modal.classList.add('hide');
modal.classList.remove('show');
document.body.style.overflow = '';
}

modalCloseBtn.forEach(closeBtn => {
  closeBtn.addEventListener('click', closeModal);
});

modal.addEventListener('click', (e) => {
if (e.target === modal) {
closeModal();
}
});

document.addEventListener('keydown', (e) => {
if (e.code === 'Escape' && modal.classList.contains('show')) {
closeModal();
}
});


const modalTriggerBasket = document.querySelectorAll('#inbasket'),
      modalBasket = document.querySelector('.modal__basket'),
      modalBasketCloseBtn = document.querySelectorAll('[data-closebtn]');

function openModalBasket() {
modalBasket.classList.add('show');
modalBasket.classList.remove('hide');
modal.classList.add('hide');
document.body.style.overflow = 'hidden';
}

modalTriggerBasket.forEach(btn  => {
  btn.addEventListener('click', openModalBasket);
  });

// modalTriggerBasket.addEventListener('click', openModalBasket);

function closeModalBasket() {
modalBasket.classList.add('hide');
modalBasket.classList.remove('show');
document.body.style.overflow = '';
}

modalBasketCloseBtn.forEach(closeBtn => {
  closeBtn.addEventListener('click', closeModalBasket);
});

modalBasket.addEventListener('click', (e) => {
if (e.target === modalBasket) {
closeModalBasket();
}
});

document.addEventListener('keydown', (e) => {
if (e.code === 'Escape' && modalBasket.classList.contains('show')) {
closeModalBasket();
}
});

