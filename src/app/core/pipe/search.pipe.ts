import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arrOfObject: any[], term: string): any[] {
    if (!term?.trim()) return arrOfObject;

    const searchTerm = term.toLowerCase().trim();

    return arrOfObject.filter(item => {
      if (!item?.title) return false;
      const words = item.title.toLowerCase().split(/\s+/);
      return words.includes(searchTerm);
    });
  }
}
