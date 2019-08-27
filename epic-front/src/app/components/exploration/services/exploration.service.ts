import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Player } from 'src/app/models/player/player';
import { PlayerService } from 'src/app/services/player.service';

@Injectable({
  providedIn: 'root'
})
export class ExplorationService {

    constructor(private http: HttpClient, private playerService: PlayerService) { }

    getToken(): string {
        return `Bearer ${localStorage.getItem('jwt')}`;
    }

    openPortal(): void {
        this.http.post("http://localhost:5002/api/portals/open", {
            headers: new HttpHeaders({
                "Authorization": this.getToken(),
                "Content-Type": "application/json"
            })
        }).subscribe(response => {
            this.playerService.player = response as Player;
        }, err => {
            console.log(err)
        });
    }
}
