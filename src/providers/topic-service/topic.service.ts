import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { Topic } from '../../models/topic.interface';
import { TOPIC_LIST } from '../../topicdata/topic.data';

/*
  Generated class for the TopicServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TopicService {
 
  constructor() {
    console.log('Hello TopicServiceProvider Provider');
  }
  getTopicList(level: string): Observable<Topic[]> {
    // return Observable.of(TOPIC_LIST.filter(x => x.owner === level));
    console.log(TOPIC_LIST);
    return Observable.of(TOPIC_LIST.filter(topic => topic.owner === level));
  }
}
