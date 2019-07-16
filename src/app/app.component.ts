import { Component} from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Router} from "@angular/router";
import {Category} from "../models/interface-category";
import { CategoryService } from 'src/app/category.service';
import { ModalController } from '@ionic/angular';
import { CartPage } from 'src/app/cart/cart.page';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent{
  public menus=[
    {title:"Liste produits",url:"/jobless",icon:'list'},
    {title:"Publier un bien",url:"/produit",icon:'share'}
  ];
  public categories:Category[];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private  router:Router,
    private categoriSeervice:CategoryService,
    public modalController: ModalController
  ) {
    this.initializeApp(); 
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  onMenuItem(m){
     this.router.navigateByUrl(m.url);
  }
  getcategory(){
    //this.categories = this.categoriSeervice.getAllCategories();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: CartPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
}
