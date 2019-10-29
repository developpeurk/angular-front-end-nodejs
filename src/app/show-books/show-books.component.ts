import { Component, OnInit } from '@angular/core';
import {BookService} from '../services/book.service';
import {Book, BookPage} from '../model/Book.model';
import { MatDialog, MatDialogConfig} from '@angular/material';
import {MatDialogModule} from '@angular/material';

import {AddBookComponent} from '../add-book/add-book.component';


@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.css']
})
export class ShowBooksComponent implements OnInit {

  public kw = '';
  public page = 1;
  public size = 5;
  public pages: Array<number>;
  public book: BookPage;
  public books: Book;
  public currentPage: number;

  constructor(private bookSer: BookService, private dialog: MatDialog) { }

  ngOnInit() {
  this.onShowBook();
  }

  onShowBook() {

      this.bookSer.getBook().subscribe(data => {
        this.book = data as BookPage;
        }, error => {
          console.log(error);
      });
  }

  saveBook(data: Book) {
    this.bookSer.AddNewBook(data).subscribe( res => {
          this.books = res;
    }, err => {
        console.log(err);
    });
  }

  onClickModal() {

    this.dialog.open(ShowBooksComponent);
  }
}
