import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import { Article } from '../../model/article';
import { ArticleQuantityChange } from './article-quantity-change';
@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleItemComponent{

  @Input() public article : Article;
  @Output() private articleEmision : EventEmitter<ArticleQuantityChange>;

  // public OnSale;

  constructor(){
    this.articleEmision = new EventEmitter<ArticleQuantityChange>();
  }
  onAddItemOnCart(event) : void{
    this.articleEmision.emit({article : this.article, quantitySelected : 1});
  }
  onRemoveItemOnCart(event) : void{
    this.articleEmision.emit({article : this.article, quantitySelected : -1});
  }
}
