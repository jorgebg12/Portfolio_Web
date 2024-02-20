import { Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import { Article } from '../../model/article';
import { ArticleServiceService } from 'src/app/services/article-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleDetailComponent implements OnInit{

  public article : Article;

  constructor(private articleService: ArticleServiceService,
              private route : ActivatedRoute){}

  ngOnInit(): void {

    this.route.data.subscribe((data: {article : Article}) => {
      this.article = data.article;
    });
  }
}
