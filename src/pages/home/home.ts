import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MarketListPage } from '../market-list/market-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mostrar:boolean = false;

  constructor(public navCtrl: NavController) {

  }

  goToMarketList() {
    this.navCtrl.push( MarketListPage );
  }

  goToProductList() {

  }

  goToShoppingList() {
    
  }

}
