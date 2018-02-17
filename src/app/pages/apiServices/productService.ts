import { Injectable } from '@angular/core';  
import { Observable } from 'rxjs/Rx'; 
import { BaseApiService } from './baseAPIService'; 
import { SearchObject } from 'app/pages/models/SearchObject';
import { Product } from 'app/pages/models/Product';



@Injectable()
export class ProductService extends BaseApiService  {
  private apiKey: string = "&key=ee8a1a84bc76fd7d7ae6dd0dc45583e3";
  
  private _baseUrl: string = "https://rocky-bayou-96357.herokuapp.com/https://api.brewerydb.com/v2/"
  private urlAll: string = this._baseUrl + "beers?withBreweries=Y"  
  private _searchUrl: string = this._baseUrl + 'search?&type=beer'+ this.apiKey + '&q='

  public search(query, p): Observable<SearchObject> {  
    var url =this._searchUrl + query;
    if(p)
    url += "&p=" +p; 
    return this._http.get(url)
       .catch(this.handleError);
 }

  public getAll(p:string , order:string , orderDirecation): Observable<SearchObject> {
  
    var url = this.urlAll + this.apiKey;
    if(p)
    url += "&p=" +p;

    if(order)
    url += "&order=" +order;

    if(orderDirecation)
    url += "&sort=" +orderDirecation   ;

    return this._http.get(url)
      .catch(this.handleError);
  }

  public getById(id): Observable<Product> { 
   var url = this._baseUrl + "beer/"+id+"?" + this.apiKey 
    return this._http.get(url)
       .catch(this.handleError);
 }

} 