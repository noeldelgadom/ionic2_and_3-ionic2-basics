import { NavParams, NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html',
})
export class BuyoutPage {
  productData: { name: string, quantity: number };

  constructor(
    private navCtrl: NavController,
    private NavParams: NavParams
  ) {
      this.productData = this.NavParams.data;
  }

  onConfirmPurchase() {
    this.navCtrl.popToRoot();
  }
}
