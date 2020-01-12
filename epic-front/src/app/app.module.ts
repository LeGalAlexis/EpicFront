import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { TokenInterceptor } from './services/token.interceptor';
import { LoginClient, ExplorationClient, PlayerClient, API_BASE_URL } from './services/main-api.service';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';

export function getBaseUrl(): string {
    return environment.apiUrl;
  }

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
        ExplorationModule,
        SharedModule,
        BrowserAnimationsModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
        LoginClient,
        ExplorationClient,
        PlayerClient,
        { provide: API_BASE_URL, useFactory: getBaseUrl }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

export function tokenGetter() {
    return localStorage.getItem('access_token');
}
