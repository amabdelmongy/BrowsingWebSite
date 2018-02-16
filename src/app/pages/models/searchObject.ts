export class Labels 
                {
                 public icon: string ;
 public medium: string ;
 public large: string ; 
                }
export class Glass 
                {
                 public id: number ;
 public name: string ;
 public createDate: string ; 
                }
export class Available 
                {
                 public id: number ;
 public name: string ;
 public description: string ; 
                }
export class Category 
                {
                 public id: number ;
 public name: string ;
 public createDate: string ; 
                }
export class Style 
                {
                 public id: number ;
 public categoryId: number ;
 public category: Category ;
 public name: string ;
 public shortName: string ;
 public description: string ;
 public ibuMin: string ;
 public ibuMax: string ;
 public abvMin: string ;
 public abvMax: string ;
 public srmMin: string ;
 public srmMax: string ;
 public ogMin: string ;
 public fgMin: string ;
 public fgMax: string ;
 public createDate: string ;
 public updateDate: string ;
 public ogMax: string ; 
                }
export class Images 
                {
 public icon: string ;
 public medium: string ;
 public large: string ;
 public squareMedium: string ;
 public squareLarge: string ; 
                }
export class Country 
                {
                 public isoCode: string ;
 public name: string ;
 public displayName: string ;
 public isoThree: string ;
 public numberCode: number ;
 public createDate: string ; 
                }
export class Location 
                {
                 public id: string ;
 public name: string ;
 public streetAddress: string ;
 public locality: string ;
 public region: string ;
 public postalCode: string ;
 public phone: string ;
 public website: string ;
 public latitude: number ;
 public longitude: number ;
 public isPrimary: string ;
 public inPlanning: string ;
 public isClosed: string ;
 public openToPublic: string ;
 public locationType: string ;
 public locationTypeDisplay: string ;
 public countryIsoCode: string ;
 public yearOpened: string ;
 public status: string ;
 public statusDisplay: string ;
 public createDate: string ;
 public updateDate: string ;
 public country: Country ;
 public hoursOfOperation: string ;
 public extendedAddress: string ;
 public forwardingId: string ; 
                }
export class Brewery 
                {
                 public id: string ;
 public name: string ;
 public nameShortDisplay: string ;
 public description: string ;
 public website: string ;
 public established: string ;
 public isOrganic: string ;
 public images: Images ;
 public status: string ;
 public statusDisplay: string ;
 public createDate: string ;
 public updateDate: string ;
 public isMassOwned: string ;
 public brandClassification: string ;
 public locations: Location[]  ;
 public mailingListUrl: string ; 
                }
export class Srm 
                {
                 public id: number ;
 public name: string ;
 public hex: string ; 
                }
export class Datum 
                {
                 public id: string ;
 public name: string ;
 public nameDisplay: string ;
 public description: string ;
 public abv: string ;
 public glasswareId: number ;
 public availableId: number ;
 public styleId: number ;
 public isOrganic: string ;
 public labels: Labels ;
 public status: string ;
 public statusDisplay: string ;
 public foodPairings: string ;
 public createDate: string ;
 public updateDate: string ;
 public glass: Glass ;
 public available: Available ;
 public style: Style ;
 public breweries: Brewery[]  ;
 public servingTemperature: string ;
 public servingTemperatureDisplay: string ;
 public ibu: string ;
 public srmId: number ;
 public srm: Srm ;
 public originalGravity: string ; 
                }
export class SearchObject 
                {
                 public currentPage: number ;
 public numberOfPages: number ;
 public totalResults: number ;
 public data: Datum[]  ;
 public status: string ; 
                }