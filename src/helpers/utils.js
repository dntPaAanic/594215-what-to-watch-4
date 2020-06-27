import {RatingLevel} from './const.js';

const getRatingLevel = (ratingScore) => {
  switch (true) {
    case (ratingScore < RatingLevel.NORMAL):
      return `Bad`;
    case (ratingScore < RatingLevel.GOOD):
      return `Normal`;
    case (ratingScore < RatingLevel.VERY_GOOD):
      return `Good`;
    case (ratingScore < RatingLevel.AWESOME):
      return `Very good`;
    case (ratingScore === RatingLevel.AWESOME):
      return `Awesome`;
    default:
      break;
  }
  return null;
};

export {getRatingLevel};
