import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddBookComponent} from './add-book/add-book.component';
import {ShowBooksComponent} from './show-books/show-books.component';


const routes: Routes = [
  {path: 'add-book', component: AddBookComponent},
  {path: 'show-book', component: ShowBooksComponent},
  {path : '',  redirectTo: '/show-book',  pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
