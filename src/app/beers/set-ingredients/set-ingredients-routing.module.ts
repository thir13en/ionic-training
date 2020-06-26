import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetIngredientsPage } from './set-ingredients.page';

const routes: Routes = [
  {
    path: '',
    component: SetIngredientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetIngredientsPageRoutingModule {}
