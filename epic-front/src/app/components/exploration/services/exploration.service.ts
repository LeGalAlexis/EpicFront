import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Player } from 'src/app/models/player/player';
import { PlayerService } from 'src/app/services/player.service';
import { Observable } from 'rxjs';
import { Map, ExplorationData } from 'src/app/services/main-api.service';
import { ExplorationClient } from 'src/app/services/main-api.service';

@Injectable({
  providedIn: 'root'
})
export class ExplorationService {

    public explorationData: ExplorationData;
    public map: Map;

    constructor(private http: HttpClient, private explorationClient: ExplorationClient) { }

    refreshData(): void {
        this.http.get("http://localhost:5002/api/exploration/res", {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        }).subscribe(response => {
            this.explorationData = response as ExplorationData;
        }, err => {
            console.log(err)
        });
    }

    refreshMap(): void {
        this.http.get("http://localhost:5002/api/exploration/map", {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        }).subscribe(response => {
            this.map = response as Map;
        }, err => {
            console.log(err)
        });
    }

    enterMap(): Observable<boolean> {
        return this.http.post<boolean>("http://localhost:5002/api/exploration/enter", {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        });
    }

    leaveMap(): void {
        this.explorationClient.leaveMap().subscribe(result => this.refreshData());
    }

    regenerateStamina(): void {
        this.explorationClient.regenerateStamina().subscribe(result => {
            if(result) {
                this.explorationData = result;
            }
        })
    }

    goTo(direction: number): void {
        this.http.post("http://localhost:5002/api/exploration/goto/" + direction, {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        }).subscribe(response => {
            this.explorationData = response as ExplorationData;
        }, err => {
            console.log(err)
        });
    }
}
