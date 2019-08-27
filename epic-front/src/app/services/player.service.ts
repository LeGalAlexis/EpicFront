import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Player } from '../models/player/player';

@Injectable({
    providedIn: 'root'
})
export class PlayerService {

    public player: Player;

    constructor(private http: HttpClient) { }

    getToken(): string {
        return `Bearer ${localStorage.getItem('jwt')}`;
    }

    refreshPlayer(): void {
        this.http.get("http://localhost:5002/api/player", {
            headers: new HttpHeaders({
                "Authorization": this.getToken(),
                "Content-Type": "application/json"
            })
        }).subscribe(response => {
            this.player = response as Player;


            //TODO : remove this, test only
            this.player.stone = 5;
        }, err => {
            console.log(err)
        });
    }

    register(form: NgForm): Observable<Object> {
        let newPlayer = JSON.stringify(form.value);
        return this.http.post("http://localhost:5002/api/player/register", newPlayer, {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        });
    }
}
