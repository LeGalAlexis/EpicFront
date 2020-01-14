import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/app/models/player/player';
import { ExplorationService } from '../../services/exploration.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-gates',
    templateUrl: './gates.component.html',
    styleUrls: ['./gates.component.css']
})
export class GatesComponent implements OnInit {

    constructor(public explorationService: ExplorationService, private router: Router) {
    }

    ngOnInit() {
        this.explorationService.refreshData();
        this.explorationService.refreshMap();
    }

    isInTown(): boolean {
        return this.explorationService.explorationData &&
            this.explorationService.explorationData.currentMapId == -1;
    }

    enterMap(): void {
        this.explorationService.enterMap().subscribe(result => {
            if (result) {
                this.explorationService.refreshData();
                this.explorationService.refreshMap();
            }
        })
    }

    regenerateStamina(): void {
        this.explorationService.regenerateStamina();
    }
}
