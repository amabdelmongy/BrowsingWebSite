import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from './components/components.module';


import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationService } from "./shared/notificationService";
import { DataTableModule, SharedModule } from 'primeng/primeng';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataListModule } from 'primeng/components/datalist/datalist';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { PagesComponent } from "./pages.component";
import { routing } from "./pages.routing";
import { CommonModule } from '@angular/common';
import { ProductService } from "./apiServices/productService";
import { DetailComponent } from "./detail/detail.component";
import { AboutComponent } from 'app/pages/about/about.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    DetailComponent,
    AboutComponent
  ],
  imports: [
    FormsModule,
    routing,
    DataTableModule,
    SharedModule,
    DataListModule,
    DropdownModule,
    ComponentsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule

  ],
  providers: [
    ProductService,
    NotificationService
  ],
  bootstrap: [
    PagesComponent
  ]
})
export class PagesModule { }
