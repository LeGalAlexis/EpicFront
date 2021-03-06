import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { Player, RegisterRequestDto } from 'src/app/services/main-api.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    invalidForm: boolean;
    result: string;

    constructor(private playerService: PlayerService, private router: Router) { }

    ngOnInit() {
    }

    register(form: NgForm) {
        let newPlayerRegistrationRequest: RegisterRequestDto = new RegisterRequestDto();
        newPlayerRegistrationRequest.email = form.controls['mail'].value;
        newPlayerRegistrationRequest.name = form.controls['name'].value;
        newPlayerRegistrationRequest.password = form.controls['password'].value;
        newPlayerRegistrationRequest.registeringPassword = form.controls['passwordalpha'].value;
        this.playerService.register(newPlayerRegistrationRequest).subscribe(response => {
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
