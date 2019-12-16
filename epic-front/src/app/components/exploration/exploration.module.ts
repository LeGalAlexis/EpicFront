import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExplorationRoutingModule } from './exploration-routing.module';
import { LaboratoryComponent } from './components/laboratory/laboratory.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
      LaboratoryComponent,
      MapComponent
  ],
  imports: [
    CommonModule,
    ExplorationRoutingModule
  ]
})
export class ExplorationModule { } 
