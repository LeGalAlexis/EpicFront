import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/app/models/player/player';
import { ExplorationService } from '../services/exploration.service';

@Component({
    selector: 'app-laboratory',
    templateUrl: './laboratory.component.html',
    styleUrls: ['./laboratory.component.css']
})
export class LaboratoryComponent implements OnInit {

    player: Player;

    constructor(private playerService: PlayerService, private explorationService: ExplorationService) { }

    ngOnInit() {
        this.playerService.refreshPlayer()
        this.player = this.playerService.player;
    }

    openPortal() {
        this.explorationService.openPortal();
    }

}
