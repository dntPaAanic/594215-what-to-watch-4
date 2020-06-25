const PREVIEW_DELAY = 1000;
const RatingLevel = {
  BAD: 0,
  NORMAL: 3,
  GOOD: 5,
  VERY_GOOD: 8,
  AWESOME: 10
};

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

export {PREVIEW_DELAY, getRatingLevel};
