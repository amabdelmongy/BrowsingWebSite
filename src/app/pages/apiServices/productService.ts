import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { BaseApiService } from './baseAPIService';
import { SearchObject } from 'app/pages/models/SearchObject';
import { Product } from 'app/pages/models/Product';



@Injectable()
export class ProductService extends BaseApiService {
  private _apiKey: string = "&key=ee8a1a84bc76fd7d7ae6dd0dc45583e3";
  ///This API enables cross-origin requests to anywhere.   
  private _baseUrl: string = "https://rocky-bayou-96357.herokuapp.com/https://api.brewerydb.com/v2/"
  private _urlAll: string = this._baseUrl + "beers?withBreweries=Y"
  private _searchUrl: string = this._baseUrl + 'search?&type=beer' + this._apiKey + '&q='
 
  public search(query, page): Observable<SearchObject> {
    var url = this._searchUrl + query;
    if (page)
      url += "&p=" + page;
    return this._http.get(url).catch(this.handleError);
  }

  public getAll(page: string, order: string, orderDirecation): Observable<SearchObject> {

    var url = this._urlAll + this._apiKey;
    if (page)
      url += "&p=" + page;

    if (order)
      url += "&order=" + order;

    if (orderDirecation)
      url += "&sort=" + orderDirecation;

    return this._http.get(url)
      .catch(this.handleError);
  }

  public getById(id): Observable<Product> {
    var url = this._baseUrl + "beer/" + id + "?" + this._apiKey
    return this._http.get(url)
      .catch(this.handleError);
  } 
} 