import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MusicComponent } from './music/music.component';
import { TwitchComponent } from './twitch/twitch.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'music', component: MusicComponent
  },
  {
    path: 'twitch', component: TwitchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }