import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

transform(arrOfObject: any[], term: string): any[] {
    if (!term?.trim()) return arrOfObject;

    const searchTerm = term.toLowerCase().trim();

    const filtered = arrOfObject.filter(item => {
      const words = item.title.toLowerCase().split(/\s+/);
      return words.includes(searchTerm);
    });

    return filtered.length > 0 ? filtered : arrOfObject;
  }
}
