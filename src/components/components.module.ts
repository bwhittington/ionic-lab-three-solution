import { NgModule } from '@angular/core';
import { BooksComponent } from './books/books';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [BooksComponent],
	imports: [IonicModule],
	exports: [BooksComponent]
})
export class ComponentsModule {}
