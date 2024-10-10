const hamburger = document.querySelector(".hamburger");

const nav = document.querySelector(".menu")

hamburger.addEventListener("click", expandir);

function expandir() {
 nav.classList.toggle("active");
}

//PARALLAX

let onda1 = document.getElementById('onda1')
let onda2 = document.getElementById('onda2')
let onda3 = document.getElementById('onda3')
let onda4 = document.getElementById('onda4')

window.addEventListener('scroll', function(){
    let rolagemPos = window.scrollY

    onda1.style.backgroundPositionX = 600 + rolagemPos * 5 + 'px'
    onda2.style.backgroundPositionX = 500 + rolagemPos * -5 + 'px'
    onda3.style.backgroundPositionX = 400 + rolagemPos * 3 + 'px'
    onda4.style.backgroundPositionX = 300 + rolagemPos * -3 + 'px'
})

// ANIMAÇÃO DA TECNOLIAS
const animatedElements = document.querySelectorAll('.animated-element');

function isElementInView(element) {
  const bounding = element.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function checkElementsVisibility() {
  animatedElements.forEach(element => {
    if (isElementInView(element)) {
      element.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkElementsVisibility);

document.addEventListener('DOMContentLoaded', checkElementsVisibility);

//TOOLTIPS

document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.tecnologias i');

    icons.forEach(icon => {
        const tooltipText = icon.getAttribute('data-tooltip');
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.innerText = tooltipText;
        icon.parentElement.appendChild(tooltip);
    });
});

// src/js/social-scroll.js
document.addEventListener('DOMContentLoaded', () => {
  const fixedSocial = document.querySelector('.fixed-social');
  const socialSection = document.querySelector('.social');

  const handleScroll = () => {
      const socialRect = socialSection.getBoundingClientRect();
      if (socialRect.bottom < 0) {
          fixedSocial.style.display = 'flex';
      } else {
          fixedSocial.style.display = 'none';
      }
  };

  window.addEventListener('scroll', handleScroll);
});

//FOOTER SCROLL LATERAL SUMINDO
document.addEventListener('DOMContentLoaded', () => {
const fixedSocial = document.querySelector('.fixed-social');
const socialSection = document.querySelector('.social');
const footerSection = document.querySelector('.rodape');

const handleScroll = () => {
    const socialRect = socialSection.getBoundingClientRect();
    const footerRect = footerSection.getBoundingClientRect();

    if (socialRect.bottom < 0 && footerRect.top > window.innerHeight) {
        fixedSocial.style.display = 'flex';
    } else {
        fixedSocial.style.display = 'none';
    }
};

window.addEventListener('scroll', handleScroll);
});

