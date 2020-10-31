import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JeesapComponent } from './jeesap/jeesap.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PaperplaneComponent } from './paperplane/paperplane.component';
import { Story1Component } from './story1/story1.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'jeesap', component: JeesapComponent },
  { path: 'paperplane', component: PaperplaneComponent },
  { path: 'story1', component: Story1Component },
  { path: '**', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
