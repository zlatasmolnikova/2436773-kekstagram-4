import {renderThumbnails } from './thumbnails.js';
import { getPhotoArray } from './utils.js';
import { COUNT_PHOTOS } from './consts.js';
export const pictures = getPhotoArray(COUNT_PHOTOS);

renderThumbnails(pictures);
