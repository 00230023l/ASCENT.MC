document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.feature-card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const detail = card.querySelector('.feature-detail');

      // Toggle display
      if (detail.style.display === 'block') {
        detail.style.display = 'none';
      } else {
        // Fechar outros detalhes
        cards.forEach(c => {
          c.querySelector('.feature-detail').style.display = 'none';
        });
        detail.textContent = card.dataset.detail;
        detail.style.display = 'block';
      }
    });
  });
});
