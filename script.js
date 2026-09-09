const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('img');
const closeButton = lightbox.querySelector('.lightbox-close');

document.querySelectorAll('.image-button').forEach((button) => {
  button.addEventListener('click', () => {
    lightboxImage.src = button.dataset.image;
    lightbox.showModal();
  });
});

closeButton.addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => {
  const rect = lightbox.getBoundingClientRect();
  const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
  if (!inside) lightbox.close();
});

const revealTargets = document.querySelectorAll(
  '.problem-grid article, .decision-grid article, .product-feature, .flow-node, .role-stack > div, .timeline-list li, .contribution-grid article, .reflection-grid article'
);
revealTargets.forEach((el) => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

revealTargets.forEach((el) => observer.observe(el));
