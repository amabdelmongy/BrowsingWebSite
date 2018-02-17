import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'app/pages/apiServices/productService';
import { Product, Data } from 'app/pages/models/product';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private product: Product;
  public data: Data;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) {
  }

  ngOnInit() {
    //// Read the  Id from the route parameter
    this.route.params.subscribe(
      params => {
        let id = params['id'];
        if (id)
          this.getProduct(id);
      }
    );
  }

  private getProduct(id) {
    this.productService.getById(id).subscribe(t => {
      this.product = t
      if (t && t.data)
        this.data = t.data;
    });
  } 

}
