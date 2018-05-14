import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Market } from '../../models/market';
import { MarketService, UtilsService } from '../../services/index';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the MarketListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-market-list',
  templateUrl: 'market-list.html',
})
export class MarketListPage {

  marketList:Market[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private marketService:MarketService,
              private utilsService:UtilsService) {
    this.showLoading();
    this.marketService.getMarkets().subscribe(
      markets => {
        this.marketList = markets;
        this.hideLoading();
      }, error => {
        this.hideLoading();
        this.showToast(error);
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarketListPage');
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
