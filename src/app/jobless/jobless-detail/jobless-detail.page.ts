import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {JoblessService} from "../jobless.service";
import { Jobless } from 'src/models/jobless.model';
import { itemCart } from 'src/models/interface-cartItem';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { ToastOptions } from '@ionic/core';
import { ModalController } from '@ionic/angular';
import { CartPage } from 'src/app/cart/cart.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


@Component({
  selector: 'app-jobless-detail',
  templateUrl: './jobless-detail.page.html',
  styleUrls: ['./jobless-detail.page.scss'],
})
export class JoblessDetailPage implements OnInit {
  public menus=[
    {title:"Jobless",url:"/menu/jobless",icon:'share'},
    {title:"Publier",url:"/menu/jobless",icon:'radio'}
  ]
  message:string = null;
  subject:string=null;
  file:string = null;
  link:string=null;
  loadJob;
    slideOpts = {
      initialSlide:0,
      speed: 400,
      autoplay:500,
      slidesPerView: 'auto',
      spacerBetween:10,
    };
  constructor(private  activateRoute:ActivatedRoute,
  private jobService:JoblessService,private storage:Storage,private toastController:ToastController,
  public modalController: ModalController,private socialSharing: SocialSharing) { }
   bdd:itemCart[];
  ngOnInit() {
    this.getonProduct('/products/');
  }
  private getonProduct(url) {
    this.activateRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('joblessId')){
        return;
      }
      const joblessId = paramMap.get('joblessId');
      this.jobService.getonJob(joblessId,url)
      .subscribe(data=>{
        this.loadJob = data;
      },err=>{
        console.log(err);
      } )
    });
  }
 /* slidesDidLoad(slides: Slides) {
    slides.startAutoplay();
  }*/
   onRateChange(event){
    console.log('your rate',event)
  }

  GetElementPanier(){
    this.storage.get("produit")
    .then(value=>alert("la valeur est "+value));;
  }
  async presentToast(productitem:Jobless) {

    let added:boolean = false;
    //si le panier est vide
      this.storage.get("chart").then((data : itemCart[])=>{
        if(data === null || data.length === 0){
          data = [];
          data.push({
            item:productitem,
            qte:1,
            montant:productitem.prix
          })
        }
        else{
          //si le panier n'est pas vide et ne contient pas l'élément
              for(let i =1;i<data.length;i++){
                const element: itemCart = data[i];
                if(productitem.id===element.item.id){
                  element.qte +=1;
                  element.montant += productitem.prix;
                  added = true;
                }

              }
              if(!added){
                data.push({
                  item:productitem,
                  qte:1,
                  montant:productitem.prix
                })
              }
        }
        this.storage.set("chart",data) 
      })   

    const toast = await this.toastController.create({
      message: 'Ton panier est mis à jour avec succès.',
      duration: 1500,
      position: 'top' 
    });
    toast.present();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: CartPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
  share(){
    this.socialSharing.share(this.message,this.subject,this.file,this.link)
    .then(()=>{
          console.log('success')
    }).catch(()=>{

    });
  }
}
