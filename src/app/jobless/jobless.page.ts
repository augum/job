 import { Component, OnInit } from '@angular/core';
 import {JoblessService} from "./jobless.service";
import { AlertController,ActionSheetController, ModalController } from '@ionic/angular';
import { AlertOptions, ActionSheetOptions } from '@ionic/core';
import { Jobless } from 'src/models/jobless.model';
import { ImageModalPage } from 'src/app/image-modal/image-modal.page';



@Component({
  selector: 'app-jobless',
  templateUrl: './jobless.page.html',
  styleUrls: ['./jobless.page.scss'],
})
export class JoblessPage implements OnInit {
   private jobs:Jobless[];
  constructor(private  jobService:JoblessService,private alerte:AlertController,
              private action:ActionSheetController,private modalController:ModalController) { }

  ngOnInit() {
    this.jobs = this.jobService.getAllJobless();
  }
  AlerteNormal(){
     alert("je suis alerte normal");
  }
  AlerteIonic(){
   let options: AlertOptions={
     header:'je suis titre',
     subHeader:'je suis le sous titre',
     message:'je suis le message',
     backdropDismiss:false,
     buttons:[
       {
        text:'Annuler',
        role:'cancel'
       },
       {
         text:'bouton 2',
         handler:()=>{
           console.log('click reussi');
         }
       }
     ]
   }
   this.alerte.create(options);
   console.log(options);
  }
  AlerteSheet(){
    let options:ActionSheetOptions={
      header:'je suis titre',
      subHeader:'je suis le sous titre',
      backdropDismiss:true,
      buttons:[
        {
         text:'Annuler',
         role:'cancel'
        },
        {
          text:'bouton 2',
          handler:()=>{
            console.log('click reussi');
          }
        }
      ]
    }
    this.action.create(options);
    console.log(options);
  }
  async openpicture(img) {
    const modal = await this.modalController.create({
      component:ImageModalPage,
      componentProps:{
        img:img
      }
    });
    return await modal.present();
  }
}
