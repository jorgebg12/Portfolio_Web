import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlCheck'
})
export class UrlCheckPipe implements PipeTransform {

  transform(imageUrl: string): string {
    let defaultURL = '../assets/images/default.jpg';
    
    return imageUrl.length===0 ? defaultURL : imageUrl;
  }

}
