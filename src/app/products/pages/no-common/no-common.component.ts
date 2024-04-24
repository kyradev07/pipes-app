import { Component } from '@angular/core';
import { delay, filter, interval, Observable, take, tap } from "rxjs";

type Gender = 'male' | 'female';
type Title = 'Mr.' | 'Mrs.';
type GenderMap = {
  [G in Gender]: Title
}
type OptionMessage = '=0' | '=1' | 'other';
type ClientMap = {
  [O in OptionMessage]: string
}
type Person = {
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'product-no-common',
  templateUrl: './no-common.component.html'
})
export class NoCommonComponent {
  //i18nSelect
  name: string = 'Sam';
  gender: Gender = 'male';
  genderMap: GenderMap = {
    'male': 'Mr.',
    'female': 'Mrs.',
  }

  //i18nPlural
  clients: string[] = ['Marie', 'Nate', 'Sandra', 'Frederick', 'Jesus', 'Magdalena', 'Lena'];
  clientMap: ClientMap = {
    '=0': 'All clients were dispatched.',
    '=1': '1 client is waiting.',
    'other': '# clients are waiting.'
  }

  //slice
  customers: string[] = [...this.clients];

  //json, keyValue
  person: Person = {
    name: 'Juan',
    age: 78,
    address: 'Medellín, Antioquia, Colombia'
  }

  //async
  myObservable: Observable<number> = interval(500).pipe(
    delay(5000),
    filter((value: number): boolean => value > 0),
    tap((value: number) => console.log(value)),
    take(10)
  );

  myPromise: Promise<string> = new Promise((resolve, _): void => {
    setTimeout((): void => {
      resolve('There is data...')
    }, 5000);
  })

  changeGuest(): void {
    this.name = this.name === 'Sam' ? 'Elizabeth' : 'Sam';
    this.gender = this.gender === 'male' ? 'female' : 'male';
  }

  dispatchClient(): void {
    this.clients.shift();
  }

  resetClients(): void {
    this.clients = ['Marie', 'Nate', 'Sandra', 'Frederick', 'Jesus', 'Magdalena', 'Lena'];
  }

}
