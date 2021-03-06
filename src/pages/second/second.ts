import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SecondComponent } from '../../components/second/second';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
  level: string = "0";

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.newMethod());
  }

  navigateToThird(): void {
    this.navCtrl.push('ThirdPage',{
      level: this.level
    });
  }

  navigateBack(): void {
    this.navCtrl.pop();
  }
  private newMethod(): any {
    return newFunction();
  }
}
function newFunction(): any {
  return 'ionViewDidLoad SecondPage';
}

