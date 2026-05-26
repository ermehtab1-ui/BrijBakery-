const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.88;

  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
