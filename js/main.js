import {getPhotos} from './data.js';
import {renderThumbnails} from './thumbnails.js';
import {openViewPopup} from './view-popup.js';

import {COUNT_PHOTOS} from './consts.js';

const photos = getPhotos(COUNT_PHOTOS);
renderThumbnails(photos);
openViewPopup(photos);
