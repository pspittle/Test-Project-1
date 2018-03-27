import { NgModule } from '@angular/core';
import { SecondComponent } from './second/second';
import { IonicModule } from 'ionic-angular';
import { TopicControllerComponent } from './topic-controller/topic-controller';
@NgModule({
	declarations: [SecondComponent,
    TopicControllerComponent],
	imports: [IonicModule],
	exports: [SecondComponent,
    TopicControllerComponent]
})
export class ComponentsModule {}
