import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from "../model/Hero";

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy: keyof Hero | undefined): Hero[] {
    return sortBy
      ? heroes.sort((a: Hero, b: Hero): number => (a[sortBy] > b[sortBy] ? 1 : -1))
      : heroes;
  }

}
