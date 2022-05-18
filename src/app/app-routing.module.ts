import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntelepeerComponent } from './intelepeer/intelepeer.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path:"",
    component: WelcomeComponent,
    pathMatch:"full"
  },
  {
    path:"intelepeer",
    component:IntelepeerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
