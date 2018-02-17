import { Component, OnInit , Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
 
import { NotificationService } from "../shared/notificationService";  
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'app/pages/apiServices/productService'; 
import { Product, Data } from 'app/pages/models/product';
 

@Component({
  selector: 'app-create-ticket',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit { 
 private product : Product;
 private data:Data;
  constructor(public formBuilder: FormBuilder, 
    private notificationService: NotificationService,
    private route: ActivatedRoute,
    private router: Router,
    private productService :ProductService) {
  }

  ngOnInit() {
    //// Read the  Id from the route parameter
    
   
  }
 
  
 

}
