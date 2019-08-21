import { Component, OnInit } from '@angular/core';
import { PlayerSettingsService } from 'src/app/services/player-settings.service';

@Component({
    selector: 'app-player-settings',
    templateUrl: './player-settings.component.html',
    styleUrls: ['./player-settings.component.css']
})
export class PlayerSettingsComponent implements OnInit {

    playerSettings: any;

    constructor(private playerSettingsService: PlayerSettingsService) { }

    ngOnInit() {
        this.playerSettingsService.getSettings().subscribe(response => {
            this.playerSettings = response;
        }, err => {
            console.log(err)
        });
    }

}
