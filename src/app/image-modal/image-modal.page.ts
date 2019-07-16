import { Component, OnInit } from '@angular/core';
import { NavParams ,ModalController} from '@ionic/angular'; 
import { ViewChild,ElementRef } from '@angular/core';


@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {
  img:any;
  @ViewChild('slider',{read:ElementRef})slider:ElementRef;
  slideropts={
    zoom:{
      maxRation:3
    }
  };
  constructor(private navParams:NavParams,private modalCtrl:ModalController) { }

  ngOnInit() {
    this.img = this.navParams.get('img');
  }
   zoom(zoomin:boolean){
     let zoom = this.slider.nativeElement.swiper.zoom;
     if(zoomin){
      zoom.in();
   }else{
     zoom.out();
   }
  }
   close(){
   this.modalCtrl.dismiss();
   } 
}
