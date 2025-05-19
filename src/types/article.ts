export type ArticleType = "published" | "generated" | "scheduled" | "archived";
export const articleTabOptions: ArticleType[] = [
    "generated",
    "published",
    "scheduled",
    "archived",
  ]; 

export interface Article {
  id: number;
  title: string;
  keyword: string;
  words: number;
  createdOn: string;
  published: boolean;
  type: ArticleType;
}
 
