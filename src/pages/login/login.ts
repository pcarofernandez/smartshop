import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserLogin } from '../../models/userLogin';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService, UtilsService } from '../../services/index';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: UserLogin;
  formGroup:FormGroup;

  constructor( public navCtrl: NavController, public navParams: NavParams,
               private fb:FormBuilder,
               private authService:AuthenticationService,
               private utilsService:UtilsService ) {
    this.formGroup = this.fb.group({
      username:['', Validators.required],
      password:['', Validators.required]
    });
  }

  ionViewDidLoad() {
  }

  access( user:UserLogin ) {
    this.showLoading();
    this.authService.login( user ).subscribe(
      res => {
        this.goToHome();
        this.hideLoading();
        this.hideToast();
      }, error => {
        this.hideLoading();
        this.showToast(error);
      }
    );
  }

  private goToHome() {
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();
  }

  private showLoading() {
    this.hideLoading();
    this.utilsService.showLoading('Cargando');
  }

  private hideLoading() {
    this.utilsService.hideLoading();
  }

  private showToast( message:string ) {
    this.hideToast();
    this.utilsService.showToast( message );
  }

  private hideToast() {
    this.utilsService.hideToast();
  }

}
