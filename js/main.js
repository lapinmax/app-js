const sliderGrayscale  = document.querySelector('#grayscale');
const sliderContrast   = document.querySelector('#contrast');
const sliderBrightness = document.querySelector('#brightness');
const sliderSepia      = document.querySelector('#sepia');
const sliderSaturate   = document.querySelector('#saturate');
const btnReset         = document.querySelector('#reset');
const image            = document.querySelector('#image');
const imgUrl           = document.querySelector('#img-url');

const defaults = {
  grayscale: 0,
  contrast: 100,
  brightness: 100,
  sepia: 0,
  saturate: 100,
};

sliderGrayscale.addEventListener ('input',  updateFilterValue);
sliderContrast.addEventListener  ('change', updateFilterValue);
sliderBrightness.addEventListener('change', updateFilterValue);
sliderSepia.addEventListener     ('change', updateFilterValue);
sliderSaturate.addEventListener  ('change', updateFilterValue);
btnReset.addEventListener        ('click',  resetFilterValue );
imgUrl.addEventListener          ('change', updateImgUrl     );

function updateFilterValue(){
  btnReset.disabled = false;

  image.style.filter = `
  grayscale(${sliderGrayscale.value}%)
  contrast(${sliderContrast.value}%)
  brightness(${sliderBrightness.value}%)
  sepia(${sliderSepia.value}%)
  saturate(${sliderSaturate.value}%)
  `
}

function resetFilterValue() {
  image.style.filter = `
  grayscale(${defaults.grayscale}%)
  contrast(${defaults.contrast}%)
  brightness(${defaults.brightness}%)
  sepia(${defaults.sepia}%)
  saturate(${defaults.saturate}%)
  `;

  sliderGrayscale.value  = defaults.grayscale;
  sliderContrast.value   = defaults.contrast;
  sliderBrightness.value = defaults.brightness;
  sliderSepia.value      = defaults.sepia;
  sliderSaturate.value   = defaults.saturate;

  btnReset.disabled = true;
}

function updateImgUrl() {
  const newImgUrl = imgUrl.value;
  image.setAttribute('src', newImgUrl);
}