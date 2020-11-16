import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { MainComponent } from './main/main.component';
import { SliderComponent } from './slider/slider.component';
import { DashComponent } from './components/dash/dash.component';
import { FullScreenMenuComponent } from './full-screen-menu/full-screen-menu.component';
import { LangComponent } from './lang/lang.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    MainComponent,
    SliderComponent,
    DashComponent,
    FullScreenMenuComponent,
    LangComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
