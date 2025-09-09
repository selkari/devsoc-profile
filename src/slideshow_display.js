let currSlide = 0;
const buttonNext = document.getElementById('slideshow');
displayImg();

buttonNext.addEventListener('click', () => {
  nextSlide();
});

function nextSlide() {
  images[currSlide].style.display = 'none';
  currSlide++;
  displayImg();
}

function displayImg() {
  images = document.getElementsByClassName('slideshow-img');
  console.log('changing image ', currSlide);
  console.log(images.length);
  if (currSlide < 0) {
    currSlide = images.length - 1;
  }
  if (currSlide > (images.length - 1)) {
    currSlide = 0;
  }
  for (img of images) {
    img.style.display = 'none';
  }
  images[currSlide].style.display = 'block';
}