import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerClient, Player, RegisterRequestDto } from './main-api.service';

@Injectable({
    providedIn: 'root'
})
export class PlayerService {

    public player: Player;

    constructor(private playerClient: PlayerClient) { }

    refreshPlayer(): void {
        this.playerClient.get().subscribe(response => {
            this.player = response as Player;
        }, err => {
            console.log(err)
        });
    }

    register(request: RegisterRequestDto): Observable<Object> {
        return this.playerClient.register(request);
    }
}
