import { Injectable } from '@angular/core';  
import { Observable } from 'rxjs/Rx'; 
import { BaseApiService } from './baseAPIService';
import {Product} from "../models/product";


@Injectable()
export class ProductService extends BaseApiService  {
 
  private urlSearch = "http://api.brewerydb.com/v2/search?type=beer&key=ee8a1a84bc76fd7d7ae6dd0dc45583e3&q=";
   
  public search(query): Observable<Product[]> { 

    return this._http.get(this.urlSearch + query)
        .catch(this.handleError);
  }
 
} 