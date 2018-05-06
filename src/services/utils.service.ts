import { Injectable } from '@angular/core';
import { LoadingController, ToastController, Loading, Toast } from 'ionic-angular';

@Injectable()
export class UtilsService {

  private loading:Loading;
  private toast:Toast;

  constructor( private loadingCtrl: LoadingController,
               private toastCtrl: ToastController ) {

  }

  showLoading( message:string ) {
    if (this.loading) {
      this.loading.dismiss();
      this.loading = null;
    }
    this.loading = this.loadingCtrl.create({
      content: message
    });
    this.loading.present();
  }

  hideLoading() {
    if (this.loading) {
      this.loading.dismiss();
      this.loading = null;
    }
  }

  showToast( message:string ) {
    if (this.toast) {
      this.toast.dismiss();
      this.toast = null;
    }
    this.toast = this.toastCtrl.create({
      message: message
    });
    this.toast.present();
  }

  hideToast() {
    if (this.toast) {
      this.toast.dismiss();
      this.toast = null;
    }
  }

}
