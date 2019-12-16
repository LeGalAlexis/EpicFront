import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Player } from 'src/app/models/player/player';
import { PlayerService } from 'src/app/services/player.service';
import { ExplorationResources } from '../models/exploration-resources';
import { Observable } from 'rxjs';
import { Map } from '../models/map';

@Injectable({
  providedIn: 'root'
})
export class ExplorationService {

    public explorationResources: ExplorationResources;

    constructor(private http: HttpClient) { }

    refreshResources(): void {
        this.http.get("http://localhost:5002/api/exploration/res", {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        }).subscribe(response => {
            this.explorationResources = response as ExplorationResources;
        }, err => {
            console.log(err)
        });
    }

    openPortal(): Observable<Object> {
        return this.http.post("http://localhost:5002/api/exploration/open/1", {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        });
    }
}
