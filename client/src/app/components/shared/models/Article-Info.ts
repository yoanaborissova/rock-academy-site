export interface ArticleInfo {
    _id: string;
    title: string;
    content: string;
    date: Date;
    imageUrl: string;
    comments: Array<string>;
}