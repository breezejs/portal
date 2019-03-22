export interface IArticleList {
  content: string;
  id: string;
  media: {
    source: {
      name: string;
      path: string;
    }[]
  };
  title: string;
}

export interface IArticleListState {
  articles: IArticleList[];
  loading: boolean;
}
