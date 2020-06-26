import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetIngredientsPageRoutingModule } from './set-ingredients-routing.module';

import { SetIngredientsPage } from './set-ingredients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetIngredientsPageRoutingModule
  ],
  declarations: [SetIngredientsPage]
})
export class SetIngredientsPageModule {}
