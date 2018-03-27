import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TopicService } from '../../providers/topic-service/topic.service';

import {Topic} from '../../models/topic.interface';

/**
 * Generated class for the ThirdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-third',
  templateUrl: 'third.html',
})
export class ThirdPage {
  topics: Topic[];
  level : string;
  constructor(private topicsvc: TopicService, private navCtrl: NavController, private navParams: NavParams) {
  }
  getTopics(): void {
    console.log("Level passed to get topics: " + this.level);
    this.topicsvc.getTopicList(this.level).subscribe(data => this.topics = data);
  }
  setRootPageToHome(): void {
    this.navCtrl.setRoot('HomePage');
  }
  sayHello(): void {
    alert("You clicked the item in the list.");
  }
  ionViewWillLoad() {
    this.level = this.navParams.get('level');
    console.log("Level in will load: " + this.level);
    if (this.level) {
      this.getTopics();
    console.log("Topics found: "+ this.topics);
    }
  }
  navigateToSel(item): void {
    if (item) {
      this.navCtrl.push('ThirdPage',{level: item}) };
  }

}
