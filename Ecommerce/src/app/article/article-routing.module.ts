import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { articleAppInterceptor } from '../interceptors/article-app.interceptor';
import { ArticleLoadResolverService } from '../services/article-load-resolver.service';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';

const routes: Routes = [
  { path: 'list', component: ArticleListComponent},
  { path: 'create', component: ArticleNewReactiveComponent , canActivate : [articleAppInterceptor]},
  { path: ':id', component: ArticleDetailComponent, resolve: { article: ArticleLoadResolverService } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
