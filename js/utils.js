// import {COUNT_PHOTOS} from './consts.js';
// import { NAMES, MESSAGES } from './consts.js';

export const getRandomNumberFromInterval = (start, end) =>
  Math.ceil(Math.random() * (end - start + 1)) + (start - 1);

export const shuffle = (array) => array.sort(() => Math.random() - 0.5);

//const photos = [];

// const generateComments = () =>{
//   const comments = [];
//   const numComments = getRandomNumberFromInterval(0,30);
//   for (let i=0; i <= numComments - 1; i++){
//     const comment = {
//       id: i,
//       avatar: `img/avatar-${getRandomNumberFromInterval(1, 6)}.svg`,
//       message: shuffle(MESSAGES),
//       name: shuffle(NAMES)
//     };
//     comments.push(comment);
//   }
//   return comments;
// };

// export const getPhotoArray = () =>{
//   for (let i = 0; i <= COUNT_PHOTOS; i++) {
//     const photo = {
//       id: i,
//       url: `photos/${i}.jpg`,
//       description: `Description of Photo ${i}`,
//       likes: getRandomNumberFromInterval(15, 200),
//       comments: generateComments()
//     };
//     photos.push(photo);
//   }
//   return photos;
// };
