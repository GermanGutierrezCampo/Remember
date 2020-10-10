import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DictionaryService } from './dictionary.service';
import { IonicStorageModule } from '@ionic/storage';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PracticePage } from './practice/practice.page';
import { HomePage } from './home/home.page';
import { EnterDataPage } from './enter-data/enter-data.page';

@NgModule({
  declarations: [AppComponent, EnterDataPage, HomePage, PracticePage],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    CommonModule,
    FormsModule,
    IonicModule,
    IonicStorageModule.forRoot(),],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DictionaryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
