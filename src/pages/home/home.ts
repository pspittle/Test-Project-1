import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SecondPage} from '../second/second';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  personName: string;
  Names = ['Pete', 'Brie', 'Moey'];
  menuarray = [{owner:"0", child:"1", wording:"Topic number 1"},
  {owner:"0", child:"2", wording:"Topic number 2"},
  {owner:"0", child:"3", wording:"Topic number 3"},
  {owner:"1", child:"1.1", wording:"Topic number 1 Subtopic 1"},
  {owner:"1", child:"1.2", wording:"Topic number 1 Subtopic 2"},
  {owner:"2", child:"2.1", wording:"Topic number 2 Subtopic 1"},
  {owner:"2", child:"2.2", wording:"Topic number 2 Subtopic 2"},
  {owner:"3", child:"3.1", wording:"Topic number 3 Subtopic 1"},
  {owner:"3", child:"3.2", wording:"Topic number 3 Subtopic 2"},
  {owner:"3.1", child:"3.1.1", wording:"Topic number 3 Subtopic 1 Ans1"},
  {owner:"3.1", child:"3.1.2", wording:"Topic number 3 Subtopic 1 Ans2"},
];

  constructor(private toast: ToastController, private navCtrl: NavController, private navParams: NavParams) {
  }
  SendToast(name: string) {
    this.toast.create({message: `Hello ${name}`, duration: 3000}).present();
  }
  navigateToSecondPage(): void {
    this.navCtrl.push('SecondPage');
  }
  navigateToFrontPage(): void {
    this.navCtrl.push('FrontPage');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  checkowner (owner: string):boolean {
    console.log(owner);
    if (owner="0") { return true } else {return false} ;
  }
}
