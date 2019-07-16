import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { PanierPipe } from './panier.pipe';
import { CartPage } from 'src/app/cart/cart.page';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ImageModalPage } from 'src/app/image-modal/image-modal.page';

import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File} from '@ionic-native/File/ngx';
import { Camera} from '@ionic-native/Camera/ngx';
import { WebView} from '@ionic-native/ionic-webview/ngx';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AppComponent, PanierPipe,CartPage,ImageModalPage],
  entryComponents: [CartPage,ImageModalPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  HttpClientModule,
  IonicStorageModule.forRoot({
      name: 'mychart',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
  ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ImagePicker,
    SocialSharing,
    File,
    Camera,
    WebView
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
