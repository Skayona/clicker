import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingPageComponent } from './greeting-page/greeting-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { GameEndPageComponent } from './game-end-page/game-end-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingPageComponent,
    GamePageComponent,
    GameEndPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
