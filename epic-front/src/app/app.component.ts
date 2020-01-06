import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlayerService } from './services/player.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    ngOnInit(): void {
        this.playerService.refreshPlayer();
    }

    constructor(private router: Router, private http: HttpClient, public playerService: PlayerService) { }

    isLogged(): boolean {
        return localStorage.getItem('jwt') != undefined;
    }

    logOut() {
        localStorage.removeItem("jwt");
        this.router.navigate(["/home"]);
    }
}
