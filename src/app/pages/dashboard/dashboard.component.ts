import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { SortMeta, LazyLoadEvent, FilterMetadata } from 'primeng/primeng';
import { LocalStorageService } from "angular-2-local-storage";
import { Router } from '@angular/router';
import { NotificationService } from "../shared/notificationService";
import { ProductService } from "../apiServices/productService";
import { SearchObject } from "../models/searchObject";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchObject: SearchObject;
  isloading: boolean = false;
  order: string;
  orderDirecation: string;
  search: string;
  constructor(private productService: ProductService,
    public localStorageService: LocalStorageService,
    public router: Router,
    public notificationService: NotificationService) {
    // this.searchObject.data[0].breweries[0].images.medium  
  }

  ngOnInit() {
    this.onLoad(null);
    this.order = "name";
    this.orderDirecation = 'ASC';
  }

  private getAll(p, order, orderDirecation) {
    this.productService.getAll(p, order, orderDirecation).subscribe(t => this.searchObject = t);
  }

  onSearch() {
    if(this.search)
    {this.productService.search(this.search).subscribe(t => this.searchObject = t);}
    else{
      this.onLoad(null);
    }
  }

  onLoad(event) {
    if (this.isloading == true)
      return; 
    //Paging 
    var pageNumber = 0;
    if (event && event.first && event.rows)
    pageNumber = event.first / event.rows;
    pageNumber = pageNumber + 1;

    //Excute Query 
    if (this.search) {
      this.onSearch();
    } else {
      this.getAll(pageNumber, this.order, this.orderDirecation);
    }
  }
  
}
