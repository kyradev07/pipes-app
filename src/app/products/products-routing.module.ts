import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPageComponent } from "./pages/basic-page/basic-page.component";
import { NumbersComponent } from "./pages/numbers/numbers.component";
import { NoCommonComponent } from "./pages/no-common/no-common.component";
import { CustomComponent } from "./pages/custom/custom.component";

const routes: Routes = [
  {
    path: '',
    component: BasicPageComponent
  },
  {
    path: 'number',
    component: NumbersComponent
  },
  {
    path: 'no-common',
    component: NoCommonComponent
  },
  {
    path: 'custom',
    component: CustomComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
