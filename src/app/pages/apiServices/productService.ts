import { Injectable } from '@angular/core';  
import { Observable } from 'rxjs/Rx'; 
import { BaseApiService } from './baseAPIService'; 
import { SearchObject } from 'app/pages/models/SearchObject';


@Injectable()
export class ProductService extends BaseApiService  {

 // private urlAll = "/v2/beers?key=ee8a1a84bc76fd7d7ae6dd0dc45583e3&q=Goosinator&callback=JSON_CALLBACK";
 // private urlSearch = "http://api.brewerydb.com/v2/search?type=beer&key=ee8a1a84bc76fd7d7ae6dd0dc45583e3&q=";
  private _baseUrl: string = "https://rocky-bayou-96357.herokuapp.com/https://api.brewerydb.com/v2/"
  private urlAll: string = this._baseUrl + "beers?glasswareId=1&withBreweries=Y"
  private _randomBeerUrl: string = this._baseUrl + "beer/random?hasLabels=Y&withBreweries=Y";
  private _beerByIdUrl: string = this._baseUrl + "beer/oeGSxs&key="
 
  private apiKey: string = "&key=ee8a1a84bc76fd7d7ae6dd0dc45583e3";
  private _searchUrl: string = this._baseUrl + 'search?'+ this.apiKey + '&q='

  public search(query): Observable<SearchObject> {  
    return this._http.get(this._searchUrl + query)
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
} 