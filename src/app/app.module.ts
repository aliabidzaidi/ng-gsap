import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JeesapComponent } from './jeesap/jeesap.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PaperplaneComponent } from './paperplane/paperplane.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JeesapComponent,
    HomepageComponent,
    PaperplaneComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
