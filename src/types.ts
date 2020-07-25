export type Film = {
  id: number | string,
  title: string,
  imagePreview: string,
  genre: string,
  backgroundColor: string,
  releaseDate: number,
  imagePoster: string,
  imageBackground: string,
  ratingScore: number,
  ratingCount: number,
  description: string,
  director: string,
  starring: string[],
  previewSrc: string,
  videoLink: string,
  runTime: string,
  isFavorite: boolean,
};

export type Comment = {
  id: string;
  user: {
    id: number,
    name: string
  }
  rating: number,
  text: string,
  date: object,
};
