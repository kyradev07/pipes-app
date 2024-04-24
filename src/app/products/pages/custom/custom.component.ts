import { Component, OnInit } from '@angular/core';
import { Color, Hero } from "../../model/Hero";

@Component({
  selector: 'product-custom',
  templateUrl: './custom.component.html',
  styles: ``
})
export class CustomComponent implements OnInit {

  toggleCase: string = 'toggle';
  isUpperCase: boolean = false;
  orderByKey: keyof Hero | undefined;
  heroes: Hero[] = [];

  ngOnInit(): void {
    this.heroes = this.initHeroes();
  }

  private initHeroes(): Hero[] {
    return [
      {
        name: 'Superman',
        canFly: true,
        color: Color.Blue
      },
      {
        name: 'Dare Devil',
        canFly: false,
        color: Color.Red
      },
      {
        name: 'Robin',
        canFly: false,
        color: Color.Grey
      },
      {
        name: 'Green Lantern',
        canFly: true,
        color: Color.Green
      },
      {
        name: 'Batman',
        canFly: false,
        color: Color.Black
      }
    ];
  }




  changeToggle(): void {
    this.isUpperCase = !this.isUpperCase;

  }

  resetArray(): void {
    this.orderByKey = undefined;
    this.heroes = this.initHeroes();

  }

  orderBy(key: keyof Hero): void {
    this.orderByKey = key;
  }

}
