   
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardComponent } from './dashboard/dashboard.component';  
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from 'app/pages/pages.component';
import {DetailComponent} from "./detail/detail.component";
import { AboutComponent } from 'app/pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent  
      }, 
      {
        path: 'detail/:id',
        component: DetailComponent  
      },{
        path: 'about',
        component: AboutComponent  
      }
    ]
  }
];
 
export const routing: ModuleWithProviders = RouterModule.forChild(routes);

 
 