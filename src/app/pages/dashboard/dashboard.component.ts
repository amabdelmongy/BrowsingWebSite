import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';  
import { DataTableModule, SharedModule } from 'primeng/primeng'; 
import { SortMeta, LazyLoadEvent, FilterMetadata } from 'primeng/primeng';
import {LocalStorageService} from "angular-2-local-storage";
import { Router } from '@angular/router';
import {NotificationService} from "../shared/notificationService";
import {ProductService} from "../apiServices/productService";
import {Product} from "../models/product";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit { 
  allTickets: Product[];
  cols: any[];

  constructor(private ticketService: ProductService,
    public localStorageService: LocalStorageService,
    public router: Router,
    public notificationService: NotificationService) {

  }
 

  ngOnInit() { 
    //at any request to APi without valid toben , 
    // it shoud throw Exception 401 and MyHttpInterceptor will handle this exception by redirect to login 
    //now we are running at mock api so i added this line 
    if (!this.localStorageService.get('token')) {
      this.router.navigate(['/login']);
    }
  


  }

  getProducts() {}


}
