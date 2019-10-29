import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book, BookPage} from '../model/Book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
public host = 'http://localhost:8085'
  constructor(private http: HttpClient) { }

  public getBook() {
  return this.http.get(this.host + '/books-search');
  }

  public searchBook(keyword: string, page: number, size: number): Observable<BookPage> {
  return this.http.get<BookPage>(this.host + '/books-search?kw=' + keyword + '&page=' + page + '&size=' + size);

  }
  public AddNewBook(book: Book): Observable<Book> {
  return this.http.post<Book>(this.host + '/books', book);
  }
}
