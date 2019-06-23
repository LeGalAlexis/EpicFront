import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule }    from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerSettingsComponent } from './components/player-settings/player-settings.component';
import { LoginComponent } from './components/login/login.component';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    PlayerSettingsComponent,
    LoginComponent
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
      })
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function tokenGetter() {
    return localStorage.getItem('access_token');
}
