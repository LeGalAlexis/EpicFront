import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { PlayerSettingsService } from 'src/app/services/player-settings.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    invalidForm: boolean;
    result: string;

    constructor(private playerService: PlayerSettingsService, private router: Router) { }

    ngOnInit() {
    }

    register(form: NgForm) {
        this.playerService.register(form).subscribe(response => {
            console.log(response);
            this.invalidForm = false;
            let navigationExtras: NavigationExtras = {
                queryParams: {
                    "from": "registration"
                }
            };
            this.router.navigate(["/login"], navigationExtras);
        }, err => {
            this.invalidForm = true;
            console.log(err);
        });
    }
}
