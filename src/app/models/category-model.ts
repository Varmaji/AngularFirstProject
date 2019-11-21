export class CategoryModel {
 //declarations are also not required
 //constructor declarations does both the jobs,declaration anf assignment
    constructor(
        public CategoryId:number,
        public CategoryName:string,
        public Description:string
    ) {
        //not required to initialise as we done in product-model.ts
        
    }
}
