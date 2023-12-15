const isEscapeKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';
const bigPicture = document.querySelector('.big-picture');
const bigPictureCloseCross = bigPicture.querySelector('.big-picture__cancel');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const loadButton = bigPicture.querySelector('.comments-loader');
let comments = null;

const STEP_COMMENTS = 5;
let commentsCounter = STEP_COMMENTS;

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
  document.querySelector('body').classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  loadButton.classList.remove('hidden');
  bigPictureCloseCross.removeEventListener('click',onBigPictureCloseCrossClick);
  document.removeEventListener('keydown', onDocumentKeydown);
}

const getCommentTemplate = (comment) => `
    <li class="social__comment">
        <img
            class="social__picture"
            src="${comment.avatar}"
            alt="${comment.name}"
            width="35" height="35">
        <p class="social__text">${comment.message.join(' ')}</p>
    </li>
`;

const renderComments = () => {
  bigPicture.querySelector('.social__comments').innerHTML = '';
  const commentsRender = comments.slice(0, commentsCounter);
  bigPicture.querySelector('.social__comments').insertAdjacentHTML('afterbegin', commentsRender.map((comment) => getCommentTemplate(comment)).join(''));
};

const renderCommentsCount = () => {
  const commentsCounterDiv = `${commentsCounter} из <span class="comments-count">${comments.length}</span> комментариев`;
  commentsCount.innerHTML = '';
  commentsCount.insertAdjacentHTML('afterbegin', commentsCounterDiv);
};

const onLoadButtonClick = () => {
  if (commentsCounter < comments.length){
    commentsCounter += STEP_COMMENTS;
  }
  if (commentsCounter >= comments.length) {
    commentsCounter = comments.length;
    loadButton.classList.add('hidden');
  }
  renderCommentsCount();
  renderComments();
};

const loadComments = () => {
  renderCommentsCount();
  renderComments();
  loadButton.addEventListener('click', onLoadButtonClick);
};

const renderMainData = (picture) => {
  const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
  bigPictureImg.src = picture.url;

  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
};

export const openViewPopup = (picture) => {
  comments = picture.comments.slice();
  renderMainData(picture);
  renderComments();
  loadComments();

  bigPicture.classList.remove('hidden');
  commentsCount.classList.add('hidden');
  document.querySelector('body').classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
  bigPictureCloseCross.addEventListener('click', onBigPictureCloseCrossClick);
};

