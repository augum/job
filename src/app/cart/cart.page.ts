import { Component, OnInit } from '@angular/core';
import { ViewController } from '@ionic/core';
import { ModalController, AlertController,ToastController  } from '@ionic/angular';
import { itemCart } from 'src/models/interface-cartItem';
import { Storage } from '@ionic/storage';
import { JoblessService } from 'src/app/jobless/jobless.service';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
   Cartitem:itemCart[];
   public total : number = 0;
  constructor(private modalController: ModalController,private storage:Storage,private toastController:ToastController,
    public alertController: AlertController,private jobService:JoblessService) { }
  
  ngOnInit() {
    this.voirPanier();
  }
  voirPanier(){
    console.log('Chargement des données du panier');
    this.storage.get("chart")
    .then((data: itemCart[] )=>{
       this.Cartitem = data;
       this.Cartitem.forEach((element: itemCart)=>{
         if(element.item.type=="Disponible"){
           element.item.feed=0;
         }
          this.total += (element.item.feed + element.item.prix * element.qte)
       })
    })
  }
  FermerModal(){
    this.modalController.dismiss({
      
    }) 
  }
  async retirerPanier(article:itemCart, index:number){
    const toast = await this.toastController.create({
      message: 'Article retiré du panier',
      duration: 2000
    });
    const alert = await this.alertController.create({
      header: 'Retirer du panier',
      message:'Êtes vous sûr de supprimer '+ article.item.title,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Retirer',
          handler: () => {
            let prix:number = article.item.prix;
            let qty:number = article.qte;
            let feed:number = article.item.feed;
            let myTotal : number = feed+qty*prix;
            this.Cartitem.splice(index,1);
            this.storage.set("chart", this.Cartitem)
            .then((data)=>{
              this.total -= myTotal;
              toast.present();   
               
            });
          }
        }
      ]
    });

    await alert.present();
  }
  async presentAlertConfirm() {
    
  }
}
