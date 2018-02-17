import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {  routing } from './app.routing'; 

import { AppComponent } from './app.component';
 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { LocalStorageModule } from 'angular-2-local-storage'; 
import { DataTableModule, SharedModule } from 'primeng/primeng';  
 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataListModule } from 'primeng/components/datalist/datalist'; 
import { DropdownModule } from 'primeng/components/dropdown/dropdown';  
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';
 

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule , 
    RouterModule, 
    HttpClientModule,
    ReactiveFormsModule,  
    LocalStorageModule.withConfig({
      prefix: 'UI-Web',
      storageType: 'localStorage'
    }),
    DataTableModule,
    SharedModule,
    BrowserAnimationsModule,
    DataListModule,
    DropdownModule,
    routing, 
    NgProgressModule     
    
  ],
  providers: [
    // ...
    { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
