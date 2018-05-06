import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HeaderComponent } from './header/header';
import { MyApp } from '../app/app.component';
@NgModule({
	declarations: [HeaderComponent],
	imports: [
	    BrowserModule,
	    IonicModule.forRoot(MyApp)
	],
	exports: [
    HeaderComponent
	]
})
export class ComponentsModule {}
