
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
    
    function updateCarousel() {
      const slideWidth = slides[0].clientWidth;
      carouselSlide.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }
    
    nextButton.addEventListener('click', () => {
      currentIndex++;
      if (currentIndex >= slides.length) {
        currentIndex = 0; // Volta para o primeiro slide
      }
      updateCarousel();
    });
    
    prevButton.addEventListener('click', () => {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = slides.length - 1; // Vai para o último slide
      }
      updateCarousel();
    });
    
    window.addEventListener('resize', updateCarousel);
    
    updateCarousel();
  });
  
  // Função para exibir as seções
function showSection(sectionId) {
  // Esconde todas as seções
  document.querySelectorAll('.section').forEach(function(section) {
      section.classList.remove('active');
  });
  // Mostra a seção escolhida
  if (sectionId === 'home') {
      document.getElementById('login').classList.remove('active');
      document.getElementById('cadastro').classList.remove('active');
  }
  document.getElementById(sectionId).classList.add('active');
}

// Funções para os botões
document.querySelector('.entrar-button').addEventListener('click', function() {
  showSection('login'); // Exibe a seção de login
});

document.querySelector('.cadastro-button').addEventListener('click', function() {
  showSection('cadastro'); // Exibe a seção de cadastro
});

document.querySelectorAll('.suites-button, .lazer-button, .gastronomia-button, .avaliacao-button').forEach(function(button) {
  button.addEventListener('click', function() {
      showSection('home'); // Volta para a seção inicial ao clicar nos botões de navegação
  });
});