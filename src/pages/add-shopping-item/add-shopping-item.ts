import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item/item.models';
import { ShoppingListService } from '../../service/shopping-list/shopping-list.service';
import { ToastService } from '../../service/toast/toast.service';



/**
 * Generated class for the AddShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {

  item: Item = {
    nome:'',
    quantidade: undefined,
    preco: undefined
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private shopping: ShoppingListService, private toast: ToastService) { }

  addItem(item: Item){
    this.shopping.addItem(item).then(ref => {
      console.log(ref.key);
      this.toast.show('${item.nome} Adicionado!');
      this.navCtrl.setRoot('HomePage',{key: ref.key})
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingItemPage');
  }

}
