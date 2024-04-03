import { Pipe, PipeTransform } from '@angular/core';
import { Shoes } from '../interfaces/shoes-interface';

@Pipe({
  name: 'search'
})
export class SearchPipePipe implements PipeTransform {
  transform(value: Shoes[], searchText: string): Shoes[] {
    if (!value) {
      return [];
    }
    if (!searchText) {
      return value;
    }
    searchText = searchText.toLowerCase();
    return value.filter(shoe => {
      return shoe.name.toLowerCase().includes(searchText);
    });
  }
}
