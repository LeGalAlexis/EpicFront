import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
    selector: 'app-player-settings',
    templateUrl: './player-settings.component.html',
    styleUrls: ['./player-settings.component.css']
})
export class PlayerSettingsComponent implements OnInit {

    constructor(public playerService: PlayerService) { }

    ngOnInit() {
        this.playerService.refreshPlayer();
    }

}
