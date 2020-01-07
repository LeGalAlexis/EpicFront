import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExplorationRoutingModule } from './exploration-routing.module';
import { GatesComponent } from './components/gates/gates.component';
import { MapComponent } from './components/map/map.component';
import { CellComponent } from './components/cell/cell.component';
import { ExplorationActionsComponent } from './components/exploration-actions/exploration-actions.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
      GatesComponent,
      MapComponent,
      CellComponent,
      ExplorationActionsComponent
  ],
  imports: [
    CommonModule,
    ExplorationRoutingModule,
    SharedModule
  ]
})
export class ExplorationModule { } 
