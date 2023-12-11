import { openViewPopup } from './view-popup.js';

const picturesContainer = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');


export const renderThumbnails = (photos) => {
  const similarFragment = document.createDocumentFragment();

  photos.forEach(({ url, description, likes, comments }) => {
    const pictureElement = picturesContainer.cloneNode(true);

    pictureElement.querySelector('img').src = url;
    pictureElement.querySelector('img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;

    similarFragment.appendChild(pictureElement);
    pictureElement.addEventListener('click', () => {
      openViewPopup(url, description, likes, comments);
    });
  });
  picturesList.append(similarFragment);
};
