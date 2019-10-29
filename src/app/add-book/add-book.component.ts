import { Component, OnInit } from '@angular/core';
import {BookService} from '../services/book.service';
import {Book} from '../model/Book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
public book: Book;
  private mode = 0;
  constructor(private bookServ: BookService) { }
  ngOnInit() {
  }
OnSaveNewBook(data: Book) {
    this.bookServ.AddNewBook(data).subscribe(res => {
         this.book = res;
         this.mode = 1;
    }, err => {
      console.log(err);
    });
}

}
