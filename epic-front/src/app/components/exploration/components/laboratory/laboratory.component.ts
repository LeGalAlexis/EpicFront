import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/app/models/player/player';
import { ExplorationService } from '../../services/exploration.service';
import { Router } from '@angular/router';
import { Map } from '../../models/map';

@Component({
    selector: 'app-laboratory',
    templateUrl: './laboratory.component.html',
    styleUrls: ['./laboratory.component.css']
})
export class LaboratoryComponent implements OnInit {
 

    constructor(public playerService: PlayerService, public explorationService: ExplorationService
        , public router: Router) { 
    }

    ngOnInit() {
        this.playerService.refreshPlayer();
        this.explorationService.refreshResources();
    }

    openPortal() {
        this.explorationService.openPortal().subscribe(response => {
            if ((response as Map).id != undefined) {
                this.router.navigate(["/exploration/map"]);
            }
        }, err => {
            console.log(err)
        });
    }

    canOpenPortal(): boolean {
        return this.explorationService.explorationResources.gems 
            && this.explorationService.explorationResources.gems > 0;
    }

    enterCurrentPortal(): void {
        
    }
}
