const modalElement = document.querySelector('.img-upload');
const imageElement = modalElement.querySelector('.img-upload__preview img');
const effectsElement = modalElement.querySelector('.effects');
const sliderElement = modalElement.querySelector('.effect-level__slider');
const sliderContainer = modalElement.querySelector('.img-upload__effect-level');
const effectLevelElement = modalElement.querySelector('.effect-level__value');

const effects = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
};

const effectToFilter = {
  [effects.CHROME]: {
    style: 'grayscale',
    unit: '',},
  [effects.SEPIA]: {
    style: 'sepia',
    unit: '',},
  [effects.MARVIN]: {
    style: 'invert',
    unit: '%',},
  [effects.HEAT]: {
    style: 'brightness',
    unit: '',},
  [effects.PHOBOS]: {
    style: 'blur',
    unit: 'px',},
};

const effectToSliderOptions = {
  [effects.DEFAULT]: {
    min: 0,
    max: 100,
    step: 1,},
  [effects.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,},
  [effects.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1,},
  [effects.MARVIN]: {
    min: 0,
    max: 100,
    step: 1,},
  [effects.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1,},
  [effects.HEAT]: {
    min: 0,
    max: 3,
    step: 0.1,},
};

let chosenEffect = effects.DEFAULT;

const isDefault = () => chosenEffect === effects.DEFAULT;

const setImageStyle = () => {
  if (isDefault()) {
    imageElement.style.filter = null;
    return;
  }
  const {value} = effectLevelElement;
  const {style, unit} = effectToFilter[chosenEffect];
  imageElement.style.filter = `${style}(${value}${unit})`;
};

const onSliderUpd = () => {
  effectLevelElement.value = sliderElement.noUiSlider.get();
  setImageStyle();
};

const showSlider = () => sliderContainer.classList.remove('hidden');

const hideSlider = () => sliderContainer.classList.add('hidden');

const createSlider = ({ min, max, step }) => {
  noUiSlider.create(sliderElement, {
    range: { min, max },
    step,
    start: max,
    connect: 'lower',
    format: {
      to: (value) => Number(value),
      from: (value) => Number(value),
    }
  });
  sliderElement.noUiSlider.on('update', onSliderUpd);
  hideSlider();
};

const updSlider = ({ min, max, step }) => {
  sliderElement.noUiSlider.updateOptions({
    range: {min, max},
    step,
    start: max,
  });
};

const setSlider = () => {
  if (isDefault()) {
    hideSlider();
  }
  else {
    updSlider(effectToSliderOptions[chosenEffect]);
    showSlider();
  }
};

const setEffect = (result) => {
  chosenEffect = result;
  setSlider();
  setImageStyle();
};

const resetEffect = () => setEffect(effects.DEFAULT);

const onEffectsChange = (evt) => setEffect(evt.target.value);

let sliderCreated = false;

const initEffect = () => {
  if (!sliderCreated) {
    createSlider(effectToSliderOptions[chosenEffect]);
    sliderCreated = true;
    effectsElement.addEventListener('change', onEffectsChange);
  }
};

export {resetEffect, initEffect};
