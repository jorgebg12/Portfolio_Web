import { Article } from "../../model/article";

export interface ArticleQuantityChange {
    article : Article;
    quantitySelected : number;
}
