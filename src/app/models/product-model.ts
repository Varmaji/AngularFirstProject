export class ProductModel {
    public ProductId:number;
    public ProductName:string;
    public UnitPrice:number;
    public UnitsInStock:number;
    public CategoryId:number;
    public Discontinued:boolean;

    
    constructor(
        id:number,
        name:string,
        price:number,
        stock:number,
        CatId:number,
        discontinued:boolean){
            this.ProductId=id;
            this.ProductName=name;
            this.UnitPrice=price;
            this.UnitsInStock=stock;
            this.CategoryId=CatId;
            this.Discontinued=discontinued;
           
    }
}
