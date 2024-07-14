type ThumbnailResolution = {
  url: string;
  width: number;
  height: number;
  tag: string;
};

export type NewsItem = {
  uuid: string;
  title: string;
  publisher: string;
  link: string;
  providerPublishTime: number;
  type: string;
  thumbnail: {
    resolutions: ThumbnailResolution[];
  };
  relatedTickers: string[];
};
