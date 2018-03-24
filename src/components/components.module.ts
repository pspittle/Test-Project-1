import { NgModule } from '@angular/core';
import { SecondComponent } from './second/second';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [SecondComponent],
	imports: [IonicModule],
	exports: [SecondComponent]
})
export class ComponentsModule {}
