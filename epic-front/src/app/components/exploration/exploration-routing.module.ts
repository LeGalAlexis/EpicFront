import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { AuthGuard } from 'src/app/services/auth-guard.service';

const routes: Routes = [
    { path: 'labo', component: LaboratoryComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExplorationRoutingModule { }
