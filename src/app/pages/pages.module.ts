import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';

import { HomeModule } from './home/home.module';

import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AboutComponent,
    FaqComponent,
    ContactsComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    // PagesRoutingModule,
    HomeModule
  ]
})
export class PagesModule { }
