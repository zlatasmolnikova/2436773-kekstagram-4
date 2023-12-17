import { openViewPopup } from './view-popup.js';

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

  pictures.forEach( ({ id, url, description, likes, comments }) => {
    const pictureElement = picturesContainer.cloneNode(true);
    pictureElement.dataset.pictureId = id;
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    similarFragment.appendChild(pictureElement);
  });

  picturesList.appendChild(similarFragment);
  picturesList.addEventListener('click', onpicturesListClick);
};
