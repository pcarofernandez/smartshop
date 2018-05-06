import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthenticationService } from '../../services/index';
import { LoginPage } from '../../pages/login/login';

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ss-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  @Input() title: string;
  mostrarLogout: boolean;

  constructor( public navCtrl:NavController,
    private authService:AuthenticationService ) {
      if (this.authService.isAuthenticated()) {
        this.mostrarLogout = true;
      } else {
        this.mostrarLogout = false;
      }
  }

  logout() {
    this.authService.logout().subscribe(
      () => {
        console.log("logout");
        this.goToLogin();
      }, error => {
        console.log( error );
      }
    );
  }

  private goToLogin() {
    this.navCtrl.setRoot(LoginPage);
    this.navCtrl.popToRoot();
  }

}
