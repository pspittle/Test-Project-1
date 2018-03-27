import { Component } from '@angular/core';

/**
 * Generated class for the TopicControllerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'topic-controller',
  templateUrl: 'topic-controller.html'
})
export class TopicControllerComponent {

  text: string;

  constructor() {
    console.log('Hello TopicControllerComponent Component');
    this.text = 'Hello World';
  }

}
