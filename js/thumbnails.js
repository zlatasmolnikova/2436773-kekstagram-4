import {openViewPopup} from './view-popup.js';

const picturesContainer = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');
let pictures = null;

const onpicturesListClick = (evt) => {
  const targetElement = evt.target.closest('.picture');
  if (targetElement){
    const id = targetElement.dataset.pictureId;
    const [thumbnail] = pictures.filter((picture) => picture.id === +id);
    openViewPopup(thumbnail);
  }
};

export const renderThumbnails = (data) => {
  pictures = data.slice();
  const similarFragment = document.createDocumentFragment();

  pictures.forEach( (picture) => {
    const pictureElement = picturesContainer.cloneNode(true);
    pictureElement.dataset.pictureId = picture.id;
    pictureElement.querySelector('.picture__img').src = picture.url;
    pictureElement.querySelector('.picture__img').alt = picture.description;
    pictureElement.querySelector('.picture__likes').textContent = picture.likes;
    pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
    similarFragment.appendChild(pictureElement);
  });

  picturesList.appendChild(similarFragment);
  picturesList.addEventListener('click', onpicturesListClick);
};
