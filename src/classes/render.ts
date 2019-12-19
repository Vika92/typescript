import {Book} from "../interfaces";

export class Render {
  name: string;
  books: Book[] = [];
  take(book: Book): void {
    this.books.push(book);
  }
}