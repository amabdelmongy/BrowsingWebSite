export class Labels {
    public icon: string;
    public medium: string;
    public large: string;
}
export class Glass {
    public id: number;
    public name: string;
    public createDate: string;
}
export class Available {
    public id: number;
    public name: string;
    public description: string;
}
export class Category {
    public id: number;
    public name: string;
    public createDate: string;
}
export class Style {
    public id: number;
    public categoryId: number;
    public category: Category;
    public name: string;
    public shortName: string;
    public description: string;
    public ibuMin: string;
    public ibuMax: string;
    public abvMin: string;
    public abvMax: string;
    public srmMin: string;
    public srmMax: string;
    public ogMin: string;
    public fgMin: string;
    public fgMax: string;
    public createDate: string;
    public updateDate: string;
}
export class Data {
    public id: string;
    public name: string;
    public nameDisplay: string;
    public description: string;
    public abv: string;
    public ibu: string;
    public glasswareId: number;
    public availableId: number;
    public styleId: number;
    public isOrganic: string;
    public labels: Labels;
    public status: string;
    public statusDisplay: string;
    public createDate: string;
    public updateDate: string;
    public glass: Glass;
    public available: Available;
    public style: Style;
}
export class Product {
    public message: string;
    public data: Data;
    public status: string;
}