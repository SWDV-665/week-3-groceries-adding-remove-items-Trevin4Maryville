import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public toastController: ToastController, public alertController: AlertController) {}

  title = "Grocery List";

  items = [
    {
      name: "Milk",
      quantity: "1 gal"
    },
    {
      name: "Eggs",
      quantity: "3 doz"
    },
    {
      name: "Sugar",
      quantity: "1 lb"
    },
    {
      name: "Bread",
      quantity: "1 loaf"
    },
    {
      name: "Bananas",
      quantity: "1 hand"
    }
  ];

  async removeItem (item, index) {

      const toast = await this.toastController.create({
      message: item.name + " was marked as purchased",
      duration: 3000,
      icon: "checkmark-circle-outline",
      position: "bottom"
    });
    toast.present();

    this.items.splice(index, 1);
  }

  async addItem () {
    const alert = await this.alertController.create({
      header: "New Item",
      message: "Add a new grocery list item",
      inputs: [
        {
          name: "name",
          type: "text",
          placeholder: "ex. Milk"
        },
        {
          name: "quantity",
          type: "text",
          placeholder: "ex. 1 gal"
        }

      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          id: 'cancel-button',
          handler: (cancel_addItem) => {
            console.log("Confirm Cancel: "+cancel_addItem);
          }
        }, {
          text: "Add",
          id: "add-button",
          handler: item => {
            console.log('Confirm Okay');
            this.items.push(item);
          }
        }
      ]
    });
    await alert.present()
  }
}
