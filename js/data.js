import {getRandomNumberFromInterval, shuffle} from './utils.js';
import { MESSAGES, NAMES, DESCRIPTIONS } from './consts.js';

const CommentsCount = {
  MIN: 0,
  MAX: 30
};

const LikesCount = {
  MIN: 15,
  MAX: 200,
};

const MessagesCount = {
  MIN: 1,
  MAX: 2,
};

const AvatarId = {
  MIN: 1,
  MAX: 6,
};

export const getComment = (_, id) => ({
  id: id + 1,
  avatar: `img/avatar-${getRandomNumberFromInterval(
    AvatarId.MIN,
    AvatarId.MAX
  )}.svg`,
  message: shuffle(MESSAGES).slice(0, getRandomNumberFromInterval(MessagesCount.MIN,
    MessagesCount.MAX)),
  name: NAMES[getRandomNumberFromInterval(0, NAMES.length - 1)],
});

export const getPhotoData = (_, id) => ({
  id: id + 1,
  url: `photos/${id}.jpg`,
  likes: `img/avatar-${getRandomNumberFromInterval(
    LikesCount.MIN,
    LikesCount.MAX
  )}.svg`,
  message: shuffle(MESSAGES).slice(0, getRandomNumberFromInterval(MessagesCount.MIN,
    MessagesCount.MAX)),
  description: DESCRIPTIONS[getRandomNumberFromInterval(0, DESCRIPTIONS.length - 1)],
  comments: Array.from({length: getRandomNumberFromInterval(
    CommentsCount.MIN,
    CommentsCount.MAX
  )}, {getComment}),
});

export const getPhotos = (countPhotos) => Array.from({length: countPhotos}, getPhotoData);
