// Tabs (Features)
var tabs = document.getElementsByClassName('tab');
for (var tab of tabs) {
  tab.style.display = 'none';
  document.getElementById('register').style.display = 'block';
}
function displayTab(id) {
  for (var tab of tabs) {
    tab.style.display = 'none';
  }
  document.getElementById(id).style.display = 'block';
}
var buttons = document.querySelectorAll('button');
for (var button of buttons) {
  button.addEventListener('click', function () {
    for (var x of buttons) {
      x.classList.remove('selected');
    }
    this.classList.add('selected');
  });
}

// Navigation burger
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
// // To make X close classes
document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);

// Chaning animated gif size at scale
let gifScale = document.getElementById('gif');
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
if (windowWidth >= 1600) {
  gifScale.setAttribute('width', '500px');
  gifScale.setAttribute('height', '292px');

  console.log(`width: ${gifScale.width}px & height: ${gifScale.height}px`);
} else if (windowWidth >= 1336) {
  gifScale.setAttribute('width', '400px');
  gifScale.setAttribute('height', '233px');

  console.log(`width: ${gifScale.width}px & height: ${gifScale.height}px`);
} else if (windowWidth >= 768) {
  gifScale.setAttribute('width', '350px');
  gifScale.setAttribute('height', '204px');

  console.log(`width: ${gifScale.width}px & height: ${gifScale.height}px`);
} else if (windowWidth >= 414) {
  gifScale.setAttribute('width', '300px');
  gifScale.setAttribute('height', '175px');

  console.log(`width: ${gifScale.width}px & height: ${gifScale.height}px`);
} else if (windowWidth >= 0) {
  gifScale.setAttribute('width', '225px');
  gifScale.setAttribute('height', '131px');

  console.log(`width: ${gifScale.width}px & height: ${gifScale.height}px`);
} else {
  console.log(`width: ${gifScale.width}px & height: ${gifScale.height}px`);
}

// Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: true,
  spaceBetween: 150,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    636: {
      slidesPerView: 2,
      slidesPerGroups: 2,
    },
    1001: {
      slidesPerView: 3,
      slidesPerGroups: 3,
    },
  },
});
