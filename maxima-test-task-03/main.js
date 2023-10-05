const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


//=========modal btn=========

const modalOpenBtn = document.getElementById('open-create-user');
const modal = document.getElementById('user-modal');
const closeModalBtn = document.getElementById('close');
const modalBtn = document.getElementById('modalBtn');

modalOpenBtn.onclick = function () {
    modal.style.display = 'block';
}

window.onclick = function (e) {
   if (e.target == closeModalBtn || e.target == modal || e.target == modalBtn) {
    modal.style.display = 'none';
   }
}