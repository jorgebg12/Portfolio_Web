import { Injectable } from '@angular/core';
import { Article } from '../model/article';

import { Observable, throwError } from 'rxjs';
import { throwError as ObservableThrow} from 'rxjs';
import { of as ObservableOf } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {
  
  constructor(private http: HttpClient) {}

  getArticles(query?:string): Observable<Article[]>{
    return this.http.get<Article[]>(`http://localhost:3000/api/articles`, { params: { q: query } });
  }

  getArticle(id :string): Observable<Article>{
    return this.http.get<Article>(`http://localhost:3000/api/articles/`+id);
  }

  changeQuantity(articleID: number, changeInQuantity: number): Observable<any> {
    return this.http.patch('http://localhost:3000/api/articles/' + articleID, {changeInQuantity: changeInQuantity});
  }

  create(article: Article): Observable<Article>{
    return this.http.post<Article>('http://localhost:3000/api/articles', article);
  }
}
