import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaboratoryComponent } from './components/laboratory/laboratory.component';
import { AuthGuard } from 'src/app/services/auth-guard.service';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
    { path: 'labo', component: LaboratoryComponent, canActivate: [AuthGuard] },
    { path: 'map', component: MapComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExplorationRoutingModule { } 
