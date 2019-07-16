import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JoblessDetailPage } from './jobless-detail.page';
import {IonicRatingModule} from "ionic4-rating/dist";


const routes: Routes = [
  {
    path: '',
    component: JoblessDetailPage
  }
];

@NgModule({
  imports: [

    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    IonicRatingModule
  ],
  declarations: [JoblessDetailPage]
})
export class JoblessDetailPageModule {}
