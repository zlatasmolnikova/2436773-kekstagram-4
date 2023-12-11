const isEscapeKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';
const bigPicture = document.querySelector('.big-picture');
const bigPictureCloseCross = bigPicture.querySelector('.big-picture__cancel');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const loadButton = bigPicture.querySelector('.comments-loader');

const onBigPictureCloseCrossClick = () => {
  closeViewPopup();
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeViewPopup();
  }
};

function closeViewPopup (){
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  bigPictureCloseCross.removeEventListener('click', onBigPictureCloseCrossClick);
  document.removeEventListener('keydown', onDocumentKeydown);
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

const renderMainData = (url, description, likes, comments) => {
  loadButton.classList.remove('hidden');
  bigPicture.classList.remove('hidden');
  const bigPictureImg = bigPicture.querySelector('.big-picture__img');
  bigPictureImg.querySelector('img').src = url;

  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('social__caption').textContent = description;
};

const renderComments = (comments) => {
  bigPicture.querySelector('.social__comments').innerHTML = '';
  bigPicture.querySelector('.social__comments').insertAdjacentHTML('afterbegin', comments.map((comment) => getCommentTemplate(comment)));
};

export const openViewPopup = (url, description, likes, comments) => {
  renderMainData(url, description, likes, comments);
  renderComments(comments);

  bigPicture.classList.remove('hidden');
  commentsCount.classList.add('hidden');
  loadButton.classList.add('hidden');
  document.querySelector('.body').classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
  bigPictureCloseCross.addEventListener('click', onBigPictureCloseCrossClick);
};
