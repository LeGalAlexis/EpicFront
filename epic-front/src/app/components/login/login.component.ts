import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginClient, Login } from 'src/app/services/main-api.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    isFromRegistration: boolean = false;
    ngOnInit(): void {
    }

    invalidLogin: boolean;

    constructor(private loginClient: LoginClient, private router: Router, private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            this.isFromRegistration = params["from"] === "registration";
        });
     }

    login(form: NgForm) {
        let user: Login = new Login();
        user.userName = form.form.get('username').value;
        user.password = form.form.get('password').value;
        this.loginClient.login(user).subscribe(response => {
            let token = (<string>response);
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
