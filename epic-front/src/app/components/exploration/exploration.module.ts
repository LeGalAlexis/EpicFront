import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExplorationRoutingModule } from './exploration-routing.module';
import { LaboratoryComponent } from './laboratory/laboratory.component';

@NgModule({
  declarations: [
      LaboratoryComponent
  ],
  imports: [
    CommonModule,
    ExplorationRoutingModule
  ]
})
export class ExplorationModule { }
