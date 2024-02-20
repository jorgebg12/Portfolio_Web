// export class Article {
//     constructor(public name : string,
//                 public imageUrl : string,
//                 public price : number,
//                 public isOnSale : boolean,
//                 public quantityInCart : number,
//                 public articleID : number){}

//     isArticleAvailable() : boolean {
//         return this.isOnSale;
//     }
 
// }

export interface Article{
    name : string,
    imageUrl : string,
    price : number,
    isOnSale : boolean,
    quantityInCart : number
    id : number
}
