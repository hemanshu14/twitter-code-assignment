import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchValue): any {
    let searchField = '';
    if(searchValue.indexOf('@') > -1) {
      searchField = searchValue.replace('@', '');
    }
    else{
      searchField = searchValue;
    }
    if(searchValue){
      return value.filter(val => val.screen_name.toLowerCase().includes(searchField.toLowerCase()));
    }
    else{
      return value;
    }
  }
}
