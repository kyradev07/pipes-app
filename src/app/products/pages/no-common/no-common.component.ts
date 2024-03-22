import { Component } from '@angular/core';

type Gender = 'male' | 'female';
type Title = 'Mr.' | 'Mrs.';
type GenderMap = {
  [G in Gender]: Title
}
type OptionMessage = '=0' | '=1' | 'other';
type ClientMap = {
  [O in OptionMessage]: string
}

@Component({
  selector: 'product-no-common',
  templateUrl: './no-common.component.html',
  styleUrl: './no-common.component.css'
})
export class NoCommonComponent {
  //i18nSelect
  name: string = 'Sam';
  gender: Gender = 'male';
  genderMap: GenderMap = {
    'male': 'Mr.',
    'female': 'Mrs.',
  }

  clients: string[] = ['Marie', 'Nate', 'Sandra', 'Frederick', 'Jesus', 'Magdalena', 'Lena'];
  clientMap: ClientMap = {
    '=0': 'All clients were dispatched.',
    '=1': '1 client is waiting.',
    'other': '# clients are waiting.'
  }

  changeGuest(): void {
    this.name = this.name === 'Sam' ? 'Elizabeth' : 'Sam';
    this.gender = this.gender === 'male' ? 'female' : 'male';
  }

  dispatchClient(): void {
    this.clients.shift();
  }
}
