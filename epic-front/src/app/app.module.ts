import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule }    from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerSettingsComponent } from './components/player-settings/player-settings.component';
import { LoginComponent } from './components/login/login.component';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { ExplorationModule } from './components/exploration/exploration.module';

@NgModule({
  declarations: [
    AppComponent,
    PlayerSettingsComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
        config: {
          tokenGetter: tokenGetter,
          whitelistedDomains: ['example.com'],
          blacklistedRoutes: ['example.com/examplebadroute/']
        }
      }),
      BsDropdownModule.forRoot(),
      TooltipModule.forRoot(),
      ModalModule.forRoot(),
      ExplorationModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function tokenGetter() {
    return localStorage.getItem('access_token');
}
