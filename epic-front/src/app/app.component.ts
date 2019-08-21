import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Epic Portals';

    constructor(private router: Router) { }

    isLogged(): boolean {
        return localStorage.getItem('jwt') != undefined;
    }

    logOut() {
        localStorage.removeItem("jwt");
        this.router.navigate(["/home"]);
    }
}
