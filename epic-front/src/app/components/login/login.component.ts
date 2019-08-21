import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    ngOnInit(): void {
    }

    invalidLogin: boolean;

    constructor(private loginService: LoginService, private router: Router) { }

    login(form: NgForm) {
        this.loginService.login(form).subscribe(response => {
            let token = (<any>response).token;
            localStorage.setItem("jwt", token);
            this.invalidLogin = false;
            this.router.navigate(["/home"]);
        }, err => {
            this.invalidLogin = true;
        });
    }

    isLogged(): boolean {
        return localStorage.getItem("jwt") != undefined;
    }

}
