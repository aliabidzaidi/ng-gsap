import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JeesapComponent } from './jeesap/jeesap.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'jeesap', component: JeesapComponent },
  { path: '**', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
