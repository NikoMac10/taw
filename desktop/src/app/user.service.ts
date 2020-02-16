import {
    Injectable
} from '@angular/core';
import {
    HttpClient,
    HttpHeaders,
    HttpParams,
    HttpErrorResponse
} from '@angular/common/http';
import {
    tap,
    catchError
} from 'rxjs/operators';
import {
    Observable
} from 'rxjs/Observable';
import jwtdecode = require('jwt-decode');
import {
    ErrorObservable
} from 'rxjs/observable/ErrorObservable';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {

    }

    public token = '';
    public url = 'http://80.211.139.226';
    private id: string;
    private tavolo: number;
    private persone: number;

    private create_options() {
        return {
            headers: new HttpHeaders({
                authorization: 'Bearer ' + this.get_token()
            })
        };

    }


    public login(mail: string, password: string, remember: boolean): Observable < any > {

        const options = {
            headers: new HttpHeaders({
                authorization: 'Basic ' + btoa(mail + ':' + password),
                'cache-control': 'no-cache',
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        };

        return this.http.get(this.url + '/login', options, ).pipe(
            tap((data) => {
                this.token = data.token;
                if (remember) {
                    localStorage.setItem('postmessages_token', this.token);
                }
            }));
    }

    public renew(): Observable < any > {

        const tk = localStorage.getItem('postmessages_token');
        if (!tk || tk.length < 1) {
            return new ErrorObservable({
                error: {
                    errormessage: 'No token found in local storage'
                }
            });
        }

        const options = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + tk,
                'cache-control': 'no-cache',
                'Content-Type': 'application/json',
            })
        };

        console.log('Renewing token');
        return this.http.get(this.url + '/renew', options, ).pipe(
            tap((data) => {
                console.log(JSON.stringify(data));
                this.token = data.token;
                localStorage.setItem('postmessages_token', this.token);
            }));
    }

    public logout() {
        console.log('Logging out');
        this.token = '';
        localStorage.setItem('postmessages_token', this.token);
    }

    public register(user): Observable < any > {
        console.log("%c POST %c /utente " + "%c body: " + JSON.stringify(user), "color: red", "color: black", "color: blue");
        return this.http.post < string > (this.url + '/utente', user, this.create_options()).pipe(
            tap((data) => {
                data;
            })
        );
    }

    public get_camerieri(): Observable < any > {
        console.log("%c GET %c /users_camerieri", "color: red", "color: black");
        return this.http.get < any > (this.url + '/users_camerieri', this.create_options()).pipe(
            tap((data) => data)
        );
    }

    public get_pizzaioli(): Observable < any > {
        console.log("%c GET %c /users_pizzaioli", "color: red", "color: black");
        return this.http.get < any > (this.url + '/users_pizzaioli', this.create_options()).pipe(
            tap((data) => data)
        );
    }

    public get_baristi(): Observable < any > {
        console.log("%c GET %c /users_baristi", "color: red", "color: black");
        return this.http.get < any > (this.url + '/users_baristi', this.create_options()).pipe(
            tap((data) => data)
        );
    }

    public get_cassieri(): Observable < any > {
        console.log("%c GET %c /users_cassieri", "color: red", "color: black");
        return this.http.get < any > (this.url + '/users_cassieri', this.create_options()).pipe(
            tap((data) => data)
        );
    }
	
	public statistiche_dipendente(id: any): Observable < any > {
        console.log("%c POST %c /statistiche_dipendente/" + id, "color: red", "color: black");
        return this.http.get < any > (this.url + '/statistiche_dipendente/' + id, this.create_options()).pipe(
            tap((data) => data)
        );
    }

    public delete_users(id): Observable < any > {

        console.log("%c DELETE %c /utente/" + id, "color: red", "color: black");
        return this.http.delete < string > (this.url + '/utente/' + id, this.create_options()).pipe(
            tap((data) => {
                data;
            })
        );
    }

    public leggi_id() {
        var appo = {
            id: this.id,
            tavolo: this.tavolo,
            persone: this.persone
        };
        return appo;
    }

    public salva_id(id: string, tavolo: number, persone: number) {
        this.id = id;
        this.tavolo = tavolo;
        this.persone = persone;
    }

    public get_token() {
        return this.token;
    }

    public get_username() {
        return jwtdecode(this.token).username;
    }

    public get_name() {
        return jwtdecode(this.token).nome;
    }

    public get_surname() {
        return jwtdecode(this.token).cognome;
    }

    public get_mail() {
        return jwtdecode(this.token).mail;
    }

    public get_id() {
        return jwtdecode(this.token).id;
    }

    public get_ruolo() {
        return jwtdecode(this.token).ruolo;
    }
}