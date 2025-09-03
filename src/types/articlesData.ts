import { Article } from './article';

export interface ArticlesData {
  newArticles: Article[],
  topArticles: Article[],
  interestingArticles: Article[],
}