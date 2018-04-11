import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ShoppingListService } from '../../service/shopping-list/shopping-list.service';
import { ToastService } from '../../service/toast/toast.service';
import { Item } from '../../models/item/item.models';

/**
 * Generated class for the EditShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {
  item: Item;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private shopping: ShoppingListService, private toast:ToastService) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
    console.log(this.item.nome);
  }

  saveItem(item: Item ){
    this.shopping.editItem(item).then(()=> {
      this.navCtrl.setRoot('HomePage');
      this.toast.show('${item.nome} Atualizado');
    });
  }

  removeItem(item: Item ){
    this.shopping.removeItem(item).then(()=> {
      this.navCtrl.setRoot('HomePage');
      this.toast.show(' ${item.nome} Excluido!');
    });
  }

}
