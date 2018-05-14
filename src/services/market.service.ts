import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Market } from '../models/market';

@Injectable()
export class MarketService {

  marketListRef:AngularFireList<any>;
  markets:Market[];

  constructor ( private fDb:AngularFireDatabase ) {
      this.marketListRef = this.fDb.list('markets');
  }

  getMarkets() {
    return this.marketListRef.valueChanges();
  }

  addMarket( market:Market ) {
    const newMarket = this.marketListRef.push( {} );
    newMarket.set({
      id: newMarket.key,
      name: market.name
    });
    return this.getMarket( newMarket.key );
  }

  getMarket( id:string ) {
    const ref = `markets/${id}`;
    return this.fDb.object(ref).valueChanges();
  }

  updateMarket( market:Market ) {
    return Observable.fromPromise( this.marketListRef.update( market.id, market ) );
  }

  removeMarket( market:Market ) {
    return Observable.fromPromise( this.marketListRef.remove( market.id ) );
  }
}
