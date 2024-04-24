import { Component } from '@angular/core';

@Component({
  selector: 'product-basic-page',
  templateUrl: './basic-page.component.html'
})
export class BasicPageComponent {
  lower: string = 'smith';
  upper: string = 'SMITH';
  fullName: string = 'aNnE sMitH';

  customDate: Date = new Date();
}
