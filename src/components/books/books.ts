import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from './book.model';

/**
 * Generated class for the BooksComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'books',
  templateUrl: 'books.html'
})
export class BooksComponent {

  @Input() bookList: Book[];
  @Output()
  viewDetailsClick: EventEmitter<number>;

  constructor() {
    this.viewDetailsClick = new EventEmitter<number>();
  }

  viewDetails = function (event, id) {
    this.viewDetailsClick.emit(id);
  }

}
