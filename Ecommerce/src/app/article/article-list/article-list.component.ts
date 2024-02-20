import { Component , OnInit, ChangeDetectionStrategy} from '@angular/core';
import { Article } from '../../model/article';
import { ArticleServiceService } from '../../services/article-service.service';
import { ArticleQuantityChange } from '../article-item/article-quantity-change';
import { Observable, Subject } from 'rxjs';
import { debounceTime, switchMap,
  distinctUntilChanged, startWith, merge } from 'rxjs/operators';
@Component({
  selector: 'app-article-list',
  template: `
  <div class="search">
      <input
        type="text" 
        name="searchBox"
        [(ngModel)]="searchString"
        placeholder="Search Here"
        (keyup)="search()">
    </div>
  <div class="article-container"
        [class]="article.isOnSale ? 'available' : 'sold-out'" *ngFor="let article of articles$ | async; index as i">
        <app-article-item [article]="article" 
                          (articleEmision)="onArticleQuantityChange($event)"></app-article-item>
</div>  
  `,
  styles: `
  *{
    display: inline-block;
    margin: 5px;
  }
  .search {
    margin-top: 20px;
    display: flex;
    justify-content:center;
    align-items: center;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleListComponent implements OnInit{
  
  public articles$ : Observable<Article[]>;

  public searchString: string = '';
  private searchTerms: Subject<string> = new Subject();
  private reloadArticleList : Subject <void> = new Subject();
  
  constructor(private articleService : ArticleServiceService){}

  ngOnInit(): void {
    this.articles$ = this.searchTerms.pipe(
      startWith(this.searchString),
      debounceTime(500),
      distinctUntilChanged(),
      merge(this.reloadArticleList),
      switchMap((q) => this.articleService.getArticles(this.searchString)));
  }
  onArticleQuantityChange(change : ArticleQuantityChange){
    this.articleService.changeQuantity(change.article.id, change.quantitySelected)
    .subscribe((res) => {
      console.log(res.msg);
      this.reloadArticleList.next();
    });
  }

  search() {
    this.searchTerms.next(this.searchString);
  }

  onNew() {
    this.reloadArticleList.next();
  }
}
