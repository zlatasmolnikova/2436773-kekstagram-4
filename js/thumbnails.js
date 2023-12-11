import { getPhotoArray } from './utils.js';
import { openViewPopup } from './view-popup.js';
import { COUNT_PHOTOS } from './consts.js';

const picturesContainer = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');
const pictures = getPhotoArray(COUNT_PHOTOS);

export const renderThumbnails = () => {
  const similarFragment = document.createDocumentFragment();

  pictures.forEach(({ url, description, likes, comments }) => {
    const pictureElement = picturesContainer.cloneNode(true);

    pictureElement.querySelector('img').src = url;
    pictureElement.querySelector('img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;

    similarFragment.appendChild(pictureElement);
    pictureElement.addEventListener('click', (evt) => {
      openViewPopup(evt, url, description, likes, comments);
    });
  });
  picturesList.append(similarFragment);
};
