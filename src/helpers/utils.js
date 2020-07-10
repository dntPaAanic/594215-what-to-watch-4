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

const formatPlayerTime = (duration, currentTime) => {
  const difference = duration - currentTime;
  const hours = `${Math.floor(difference / 3600)}`;
  const minutes = `${Math.floor(difference / 60)}`;
  const sec = `${Math.floor(difference % 60)}`;

  const hoursStr = hours.length === 2 ? hours : `0${hours}`;
  const minutesStr = minutes.length === 2 ? minutes : `0${minutes}`;
  const secStr = sec.length === 2 ? sec : `0${sec}`;

  return `${hoursStr}:${minutesStr}:${secStr}`;
};

export {getRatingLevel, formatPlayerTime};
