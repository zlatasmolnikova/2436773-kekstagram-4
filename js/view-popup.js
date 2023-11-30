const isEscapeKey = (evt) => evt.key === 'Escape';
const bigPicture = document.querySelector('.big-picture');
const bigPictureCloseCross = bigPicture.querySelector('.big-picture__cancel');

const onBigPictureCloseCrossClick = () => {
  closeViewPopup();
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onBigPictureCloseCrossClick();
  }
};

function closeViewPopup(){
  document.querySelector('.body').classList.remove('modal-open');
  bigPicture.classList.add('.hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
  bigPictureCloseCross.removeEventListener('click', onBigPictureCloseCrossClick);
}

const getCommentTemplate = ({avatar, name, message}) => `
  <li class="social__comment">
    <img
      class="social__picture"
      src="${avatar}"
      alt="${name}"
      width="35" height="35">
    <p class="social__text">${message.join(' ')}</p>
  </li>
`;

const renderMainData = (pictureById) => {
  const bigPictureImg = bigPicture.querySelector('.big-picture__img');
  bigPictureImg.querySelector('img').src = pictureById.url;

  bigPicture.querySelector('.likes-count').textContent = pictureById.likes;
  bigPicture.querySelector('.comments-count').textContent = pictureById.comments.length;
  bigPicture.querySelector('social__caption').textContent = pictureById.description;
};

const renderComments = (pictureById) => {
  bigPicture.querySelector('.social__comments').innerHTML = '';
  bigPicture.querySelector('.social__comments').insertAdjacentHTML('afterbegin', pictureById.comments.map((comment) => getCommentTemplate(comment)));
};

export const openViewPopup = (pictureById) => {
  renderMainData(pictureById);
  renderComments(pictureById);

  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
  document.querySelector('.body').classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
  bigPictureCloseCross.addEventListener('click', onBigPictureCloseCrossClick);
};
