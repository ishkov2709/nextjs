interface IParamsId {
  params: {
    id: string;
  };
}

interface IDataById {
  hits: {
    largeImageURL: string;
    webformatWidth: number;
    webformatHeight: number;
    views: number;
    likes: number;
    user: string;
    tags: string;
  }[];
}
