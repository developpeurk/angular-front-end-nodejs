export interface Book {
  _id: string;
  publishingDate: Date;
  quantity: number;
  title: string;
  author: string;
  available: boolean;
  price: number;
}
export interface BookPage {
  docs: Array<Book>;
  total: number;
  limit: number;
  page: number;
  pages: number;
}
