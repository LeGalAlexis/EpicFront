import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerSettingsComponent } from './components/player-settings/player-settings.component';
import { AuthGuard } from './services/auth-guard.service';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registering', component: RegistrationComponent },
    { path: 'home', component: HomeComponent },
    { path: 'settings', component: PlayerSettingsComponent, canActivate: [AuthGuard] },
    { path: 'exploration', loadChildren: () => import('./components/exploration/exploration.module').then(mod => mod.ExplorationModule) },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
