import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class PlayerSettingsService {

    constructor(private http: HttpClient) { }

    getSettings(): Observable<Object> {
        let token = localStorage.getItem("jwt");
        return this.http.get("http://localhost:5002/api/player", {
            headers: new HttpHeaders({
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json"
            })
        });
    }

    register(form: NgForm): Observable<Object> {
        let newPlayer = JSON.stringify(form.value);
        return this.http.post("http://localhost:5002/api/player/register", newPlayer, {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        });
    }
}
