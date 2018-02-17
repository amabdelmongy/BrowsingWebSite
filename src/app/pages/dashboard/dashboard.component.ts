import { Component, OnInit , ViewChild } from '@angular/core'; 
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { SortMeta, LazyLoadEvent, FilterMetadata } from 'primeng/primeng';
import { Router } from '@angular/router';
import { ProductService } from "../apiServices/productService";
import { SearchObject } from "../models/searchObject"; 
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchObject: SearchObject; 
  order: string= "name"; 
  orderDirecation: string= 'ASC';
  search: string; 
  term = new FormControl();

  constructor(private productService: ProductService,
    public router: Router) {
  }

  ngOnInit() {
    this.onLoadTable(null); 
    this.term.valueChanges.debounceTime(600)
    .distinctUntilChanged().subscribe(term =>{this.search = term ; this.onLoadTable(1) } );
  }

 

  get(pageNumber) {
    if (this.search) {
      this.productService.search(this.search, pageNumber)
      .subscribe(searchObject => { 
        this.searchObject = searchObject
      } );
    }
    else {
      this.productService.getAll(pageNumber,this.order, this.orderDirecation)
      .subscribe(searchObject => { 
        this.searchObject = searchObject
      });
    }
  }

  onLoadTable(event) { 
    //Paging 
    var pageNumber = 0;
    if (event && event.first && event.rows)
      pageNumber = event.first / event.rows;
    pageNumber = pageNumber + 1; 
      this.get(pageNumber); 
  }

}
