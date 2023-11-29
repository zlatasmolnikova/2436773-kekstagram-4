import {getPhotos} from './data.js';
import {generateThumbnails} from './thumbnails.js';
import {renderThumbnail} from './view-popup.js';

import {COUNT_PHOTOS} from './consts.js';

const photos = getPhotos(COUNT_PHOTOS);
generateThumbnails(photos);
renderThumbnail(photos);
