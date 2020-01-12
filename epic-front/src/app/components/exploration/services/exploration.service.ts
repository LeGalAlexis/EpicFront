import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Player } from 'src/app/models/player/player';
import { PlayerService } from 'src/app/services/player.service';
import { Observable } from 'rxjs';
import { Map, ExplorationData, Directions } from 'src/app/services/main-api.service';
import { ExplorationClient } from 'src/app/services/main-api.service';

@Injectable({
  providedIn: 'root'
})
export class ExplorationService {

    public explorationData: ExplorationData;
    public map: Map;

    constructor(private http: HttpClient, private explorationClient: ExplorationClient) { }

    refreshData(): void {
        this.explorationClient.getExplorationResources().subscribe(response => {
            this.explorationData = response as ExplorationData;
        }, err => {
            console.log(err)
        });
    }

    refreshMap(): void {
        this.explorationClient.getCurrentMap().subscribe(response => {
            this.map = response as Map;
        }, err => {
            console.log(err)
        });
    }

    enterMap(): Observable<boolean> {
        return this.explorationClient.enterDefaultMap();
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

    goTo(direction: Directions): void {
        this.explorationClient.goTo(direction).subscribe(response => {
            this.explorationData = response as ExplorationData;
        }, err => {
            console.log(err)
        });
    }
}
