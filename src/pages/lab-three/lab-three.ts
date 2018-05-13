import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Book, fakeBookList } from '../../components/books/book.model';
import { DetailsPage } from '../details/details';

/**
 * Generated class for the LabThreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name: 'lab-three'
  }
)
@Component({
  selector: 'page-lab-three',
  templateUrl: 'lab-three.html',
})
export class LabThreePage {
  bookList:Array<Book> =  fakeBookList;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LabThreePage');
  }

  viewDetails = function(bookId) {
    this.navCtrl.push(DetailsPage,  {
      bookId: bookId
    });
  };
}
