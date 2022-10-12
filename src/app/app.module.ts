import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/footer/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/home/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './Pages/home/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,  
    FooterComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
