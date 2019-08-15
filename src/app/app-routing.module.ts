import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreetingPageComponent } from './greeting-page/greeting-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { GameEndPageComponent } from './game-end-page/game-end-page.component';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'greeting'
},
{
  path: 'greeting',
  component: GreetingPageComponent
},
{
  path: 'game',
  component: GamePageComponent
},
{
  path: 'game-end',
  component: GameEndPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
