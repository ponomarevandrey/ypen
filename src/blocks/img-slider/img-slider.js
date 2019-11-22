'strict';

// from another file 'strict';

let node = document.querySelector('.main');
console.log(node);

// ref: http://christianheilmann.com/2015/04/08/keeping-it-simple-coding-a-carousel/

let carousel = (function() {
  const box = document.querySelector('.carousel-box');
  const next = box.querySelector('.next');
  const prev = box.querySelector('.prev');
  const items = box.querySelectorAll('.content li');

  let counter = 0;
  const amount = items.length;
  let current = items[0];

  box.classList.add('active');

  function navigateTo(direction) {
    current.classList.remove('current');
    counter = counter + direction;

    if (direction === -1 && counter < 0) counter = amount - 1;
    if (direction === 1 && !items[counter]) counter = 0;

    current = items[counter];
    current.classList.add('current');
  }

  next.addEventListener('click', e => navigateTo(1));
  prev.addEventListener('click', e => navigateTo(-1));

  navigateTo(0);
})();

/*
// Testing:

function assert(condution, message) {
  return condution ? true : message;
}

let a = 2;

console.log(assert(a === 1, 'Disaster, a is not 1!'));

// Performance analysis:

const maxCount = 10000;

console.time('My Operation');

for (let i = 0; i < maxCount; i++) {
  document.querySelector('.main');
}

console.timeEnd('My Operation');

window.onclick = function(e) {
  console.log('onclick');
};

window.onclick = function(e) {
  console.log('onclick 2');
};

window.addEventListener('click', function() {
  console.log('click');
});
*/







//------------------

// Carousel v 2
/*
let slideIndex = 1;

function showSlides(num) {
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');

  if (num > slides.length) slideIndex = 1;
  if (num < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) slides[i].style.display = 'none';
  for (let i = 0; i < dots.length; i++)
    dots[i].className = dots[i].className.replace(' active', '');

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].style.display += ' active';
}

// carousel__next/carousel__previous controls
function plusSlides(num) {
  showSlides((slideIndex += num));
}

// Thumbnail image controls
function currentSlide(num) {
  console.log('works');
  showSlides((slideIndex = num));
}

for (let i = 0; i < document.querySelectorAll('.dot').length; i++) {
  let dots = document.querySelectorAll('.dot');
  console.log(dots[i]);
  dots[i].addEventListener('click', currentSlide.bind(this, i));
}

showSlides(slideIndex);
*/
//Carousel v 1

// ref: http://christianheilmann.com/2015/04/08/keeping-it-simple-coding-a-carousel/
/*
let carousel = (function() {
  const carousel = document.querySelector('.carousel');
  const carousel__next = carousel.querySelector('.carousel__next');
  const carousel__prev = carousel.querySelector('.carousel__prev');
  const carousel__items = carousel.querySelectorAll('.carousel__item');

  let counter = 0;
  const amount = carousel__items.length;
  let current = carousel__items[0];

  carousel.classList.add('carousel_active');

  function navigateTo(direction) {
    current.classList.remove('carousel__item_current');
    counter = counter + direction;

    if (direction === -1 && counter < 0) counter = amount - 1;
    if (direction === 1 && !carousel__items[counter]) counter = 0;

    current = carousel__items[counter];
    current.classList.add('carousel__item_current');
  }

  carousel__next.addEventListener('click', e => navigateTo(1));
  carousel__prev.addEventListener('click', e => navigateTo(-1));

  navigateTo(0);
})();
*/

// Social media photos Slider

// make it possible to import photos from instagram, VK, facebppk, Flickr, Twitter, Pinterest

// The model never touches the view. The view never touches the model. The controller connects them.

class Model {
  constructor() {
    // get images from api
    // ...

    this.apiResponse = [
      './../../img/animals_landscape_xxxl.jpg',
      './../../img/fullscreen-image.jpg',
      './../../img/image-001-gr6da28af.jpg',
      './../../img/image-002-45faf45f.jpg',
      './../../img/image-003-825fd5ffd.jpg',
      './../../img/image-004-45fd5ew5s.jpg',
      './../../img/image-005-74fd5fdfs5w5.jpg',
    ];
  }
}

class View {
  constructor() {
    const image = document.createElement('img');
    image.src = APIresponse[3];
    document.querySelector('main').appendChild(image);
  }
}

class Controller {
  constructor(model, view) {}
}

class Slider {
  constructor(direction = 'right', speed = 2000, from = 0, timerInterval = 5000, animationStyle = 'ease') {
    const carousel = document.querySelector('#carousel');
    const carousel__next = carousel.querySelector('.carousel__next');
    const carousel__prev = carousel.querySelector('.carousel__prev');
    this._carousel__items = carousel.querySelectorAll('.carousel__item');

    carousel.classList.add('carousel_active');

    carousel__next.addEventListener('click', e => this.navigateTo(1));
    carousel__prev.addEventListener('click', e => this.navigateTo(-1));

    this._counter = 0;
    this._amount = this._carousel__items.length;
    this._current = this._carousel__items[0];

    this.navigateTo(0);
  }

  navigateTo(direction) {
    this._current.classList.remove('carousel__item_current');
    this._counter = this._counter + direction;

    if (direction === -1 && this._counter < 0) this._counter = this._amount - 1;
    if (direction === 1 && !this._carousel__items[this._counter])
      this._counter = 0;

    this._current = this._carousel__items[this._counter];
    console.log(this._current);
    this._current.classList.add('carousel__item_current');
  }

  static createVK(address) {
    // reminder: 'this' here = 'Slider' constructor function itself
    return new this(address);
  }
  
  static createWithAsetNumberOfSlides() {}
}

let defaultSlider = new Slider();
//document.querySelector('.footer').appendChild(new Carousel());

/*
// Testing:

function assert(condution, message) {
  return condution ? true : message;
}

let a = 2;

console.log(assert(a === 1, 'Disaster, a is not 1!'));

// Performance analysis:

const maxCount = 10000;

console.time('My Operation');

for (let i = 0; i < maxCount; i++) {
  document.querySelector('.main');
}

console.timeEnd('My Operation');

window.onclick = function(e) {
  console.log('onclick');
};

window.onclick = function(e) {
  console.log('onclick 2');
};

window.addEventListener('click', function() {
  console.log('click');
});
*/
