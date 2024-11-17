
document.addEventListener('DOMContentLoaded', () => {
    const suitesButton = document.querySelector('.suites-button');
    const suitesSection = document.querySelector('.suites-section');
    
    if (suitesButton && suitesSection) {
      suitesButton.addEventListener('click', () => {
        suitesSection.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      });
    } else {
      console.error('Botão não encontrado.');
    }
  });
  
document.addEventListener('DOMContentLoaded', () => {
    const suitesButton = document.querySelector('.lazer-button');
    const suitesImage = document.querySelector('.image');
    
    if (lazerButton && lazerImage) {
      lazerButton.addEventListener('click', () => {
        lazerImage.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      });
    } else {
      console.error('Botão não encontrado.');
    }
  });
  
document.addEventListener('DOMContentLoaded', () => {
    const carouselSlide = document.querySelector('.carousel-slide');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
  
    let currentIndex = 0;
  
    // Atualiza a posição do carrossel
    function updateCarousel() {
      const slideWidth = slides[0].clientWidth;
      carouselSlide.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }
  
    // Botão "Próximo"
    nextButton.addEventListener('click', () => {
      currentIndex++;
      if (currentIndex >= slides.length) {
        currentIndex = 0; // Volta para o primeiro slide
      }
      updateCarousel();
    });
  
    // Botão "Anterior"
    prevButton.addEventListener('click', () => {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = slides.length - 1; // Vai para o último slide
      }
      updateCarousel();
    });
  
    // Ajusta o carrossel em caso de redimensionamento da janela
    window.addEventListener('resize', updateCarousel);
  
    // Atualiza o carrossel ao carregar
    updateCarousel();
  });
  