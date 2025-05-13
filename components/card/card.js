document.addEventListener('DOMContentLoaded', function() {
    const cardTitle = document.querySelector('.card__title');
    
    if (cardTitle) {
      cardTitle.addEventListener('click', function() {
        cardTitle.style.color = 'red';
      });
    }
  });