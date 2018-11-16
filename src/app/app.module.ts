import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActorsComponent } from './actors/actors.component';
import { AppRoutingModule } from './/app-routing.module';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorsComponent,
    ActorDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
