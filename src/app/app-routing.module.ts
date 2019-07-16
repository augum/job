import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'jobless', pathMatch: 'full' },
  { path: 'jobless',
      children:[
        {
          path: '',
          loadChildren: './jobless/jobless.module#JoblessPageModule'
        },
        {
          path: ':joblessId',
          loadChildren: './jobless/jobless-detail/jobless-detail.module#JoblessDetailPageModule'
        }
    ]
  },
  { path: 'produit', loadChildren: './produit/produit.module#ProduitPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'image-modal', loadChildren: './image-modal/image-modal.module#ImageModalPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),



  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
