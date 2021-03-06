import { Component, OnInit } from '@angular/core';
import { ImagePicker, ImagePickerOptions, OutputType } from '@ionic-native/image-picker/ngx';
import { Jobless } from 'src/models/jobless.model';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage implements OnInit {
  myProduct:Jobless;
  categories;
  city=[
    {
      titre:'kinshasa'
    },
    {
      titre:'brazza'
    }
    
  ];
  constructor(private imagePicker:ImagePicker,private catservice:CategoryService) {
    
   }
  
  ngOnInit() {
    this.myProduct = {} as Jobless;
    this.myProduct.picture;
    this.getCategorie();
  }
  
  enregistrer(myProduct:Jobless){
    myProduct.start=1;
    myProduct.picture="unknown.png"
    myProduct.available =true;

    let url = this.catservice.host+"/products"
    this.catservice.postRessource(url,myProduct)
      .subscribe(data=>{
      },err=>{
        console.log(err);
      })

    console.log('myProduct= ', myProduct)

  }
  pickimager(){
    let options:ImagePickerOptions={
      maximumImagesCount:4,
      outputType: OutputType.FILE_URL
    }
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
         this. myProduct.picture= results;
      }
    }, (err) => { });
  }
  private getCategorie() {
    this.catservice.getResource("/categories")
      .subscribe(data=>{
        this.categories=data;
      },err=>{
        console.log(err);
      })
 }
}
