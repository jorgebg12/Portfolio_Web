import { Component } from '@angular/core';
import { Article } from '../../model/article';

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrl: './article-new-template.component.css'
})
export class ArticleNewTemplateComponent {

  public article : Article;
  constructor(){
    //this.article = new Article('','',0,false,0,1);
  }
  createArticle(articleForm){
    console.log("New Article:");
  
    if(articleForm.valid){
      this.article = articleForm.value.article;
      console.log(JSON.stringify(articleForm.value));
    }else{
      console.error("article is invalid");
    }
  }
}
