import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Article } from '../model/article';
import { Observable } from 'rxjs';
import { ArticleServiceService } from './article-service.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleLoadResolverService implements Resolve<Article>{

  constructor(private articleService : ArticleServiceService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Article | Observable<Article> | Promise<Article> {

    const articleId = route.paramMap.get('id');
    return this.articleService.getArticle(articleId);
  }
}
