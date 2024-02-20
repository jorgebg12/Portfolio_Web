import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { CustomValidator } from './custom-validator';
import { ArticleServiceService } from '../../services/article-service.service';

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrl: './article-new-reactive.component.css',
})
export class ArticleNewReactiveComponent {

  @Output() private articleNew: EventEmitter<void> = new EventEmitter();

  public articleForm : FormGroup;
  public message = null;
  public urlRegex : string = "(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,3}).*";
  public invalidNames : string[] = ['prueba', 'test', 'mock', 'fake'];

  constructor(private fb: FormBuilder, 
              private articleService : ArticleServiceService){
    this.createForm();
  }

  createForm(){
    this.articleForm = this.fb.group({
      name:   ["",[Validators.required, CustomValidator.NameArticleValidator(this.invalidNames)]],
      price:  [0,[Validators.required, Validators.min(0.1)]],
      url:    ["",[Validators.required, Validators.pattern(this.urlRegex)]],
      onsale: [false, Validators.nullValidator]
    });
  }

  onSubmit(){
    //console.log("article form value: " + this.articleForm.value);
    
    if(this.articleForm.valid){

      console.log("Se han recogido los datos del formulario correctamente");
      let article = {
        id: null,
        name:this.articleForm.value.name,
        imageUrl:'',
        price:this.articleForm.value.price,
        foodPairing: [],
        isOnSale:this.articleForm.value.onsale,
        quantityInCart:0
      }
      
      console.log(article);
      
      this.articleService.create(article)
        .subscribe((msg) => {
          this.message = 'New Article created';
            this.articleNew.next();
        },(err) => this.message = err);
    }else{
      console.error("article invalid");
    }
    
    this.articleForm.markAllAsTouched();
  }

  get name() { return this.articleForm.get('name');}
  get price() { return this.articleForm.get('price');}
  get url() { return this.articleForm.get('url');}
  
}
