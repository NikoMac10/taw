import {
    Injectable
} from '@angular/core';
import {
    Observable
} from 'rxjs/Observable';
import {
    ErrorObservable
} from 'rxjs/observable/ErrorObservable';
import {
    tap,
    catchError
} from 'rxjs/operators';
import { of
} from 'rxjs/observable/of';
import {
    HttpClient,
    HttpHeaders,
    HttpParams,
    HttpErrorResponse
} from '@angular/common/http';
import {
    UserService
} from './user.service';


@Injectable()
export class ProductService {


    constructor(private http: HttpClient, private us: UserService) {}


    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                'body was: ' + JSON.stringify(error.error));
        }

        // return an ErrorObservable with a user-facing error message
        return new ErrorObservable('Something bad happened; please try again later.');
    }

    private create_options() {
        return {
            headers: new HttpHeaders({
                authorization: 'Bearer ' + this.us.get_token()
            })
        };

    }


    //           PIZZAIOLO

    public prossima_ord_pizzaiolo(): Observable < any > {
        console.log("%c GET %c /prossima_ord_pizzaiolo", "color: red", "color: black");
        return this.http.get < any > (this.us.url + '/prossima_ord_pizzaiolo', this.create_options()).pipe(
            tap((data) => data),
            catchError(this.handleError)
        );
    }

    public pizza_inizio_preparazione(id: string): Observable < any > {
        console.log("%c POST %c /pizza_inizio_preparazione/" + id, "color: red", "color: black");
        return this.http.post < any > (this.us.url + '/pizza_inizio_preparazione/' + id, null, this.create_options()).pipe(
            catchError(this.handleError)
        );

    }

    public pizza_fine_preparazione(id: string): Observable < any > {
        console.log("%c POST %c /pizza_fine_preparazione/" + id, "color: red", "color: black");
        return this.http.post < any > (this.us.url + '/pizza_fine_preparazione/' + id, null, this.create_options()).pipe(
            catchError(this.handleError)
        );

    }

    public pizze_pronte(id: string): Observable < any > {
        console.log("%c POST %c /pizze_pronte/" + id, "color: red", "color: black");
        return this.http.post < any > (this.us.url + '/pizze_pronte/' + id, null, this.create_options()).pipe(
            catchError(this.handleError)
        );

    }


    //            BARISTA
    public prossima_ord_barista(): Observable < any > {
        console.log("%c GET %c /prossima_ord_barista", "color: red", "color: black");
        return this.http.get < any > (this.us.url + '/prossima_ord_barista', this.create_options()).pipe(
            tap((data) => data),
            catchError(this.handleError)
        );
    }

    public bibite_pronte(id: string): Observable < any > {
        console.log("%c POST %c /bibite_pronte/" + id, "color: red", "color: black");
        return this.http.post < any > (this.us.url + '/bibite_pronte/' + id, null, this.create_options()).pipe(
            catchError(this.handleError)
        );

    }

    public abbandona_ordine_bibite(id: string): Observable < any > {
        console.log("%c POST %c /abbandona_ordine_bibite/" + id, "color: red", "color: black");
        console.log(id);
        return this.http.post < any > (this.us.url + '/abbandona_ordine_bibite/' + id, null, this.create_options()).pipe(
            catchError(this.handleError)
        );

    }

    //            CAMERIERE 
    public crea_ordine(tavolo: number, persone: number): Observable < any > {
        var body = {
            "tavolo": tavolo,
            "persone_da_servire": persone
        };
        console.log("%c POST %c /crea_ordine " + "%c body: " + JSON.stringify(body), "color: red", "color: black", "color: blue");
        return this.http.post < any > (this.us.url + '/crea_ordine', body, this.create_options()).pipe(
            catchError(this.handleError)
        );
    }

    public chiudi_ordine(id: string): Observable < any > {
        console.log("%c POST %c /chiudi_ordine/" + id, "color: red", "color: black");
        return this.http.post < any > (this.us.url + '/chiudi_ordine/' + id, null, this.create_options()).pipe(
            catchError(this.handleError)
        );
    }

    public aggiungi_prodotto(id: string, body: any): Observable < any > {
        console.log("%c POST %c /aggiungi_prodotto " + "%c body: " + JSON.stringify(body), "color: red", "color: black", "color: blue");
        return this.http.post < any > (this.us.url + '/aggiungi_prodotto/' + id, body, this.create_options()).pipe(
            catchError(this.handleError)
        );
    }

    public ordini_da_consegnare(): Observable < any > {
        console.log("%c GET %c /ordini_da_consegnare", "color: red", "color: black");
        return this.http.get < any > (this.us.url + '/ordini_da_consegnare', this.create_options()).pipe(
            catchError(this.handleError)
        );
    }

    public bibite_consegnate(id: string): Observable < any > {
        console.log("%c POST %c /bibite_consegnate/" + id, "color: red", "color: black");
        return this.http.post < any > (this.us.url + '/bibite_consegnate/' + id, null, this.create_options()).pipe(
            catchError(this.handleError)
        );
    }

    public pizze_consegnate(id: string): Observable < any > {
        console.log("%c POST %c /pizze_consegnate/" + id, "color: red", "color: black");
        return this.http.post < any > (this.us.url + '/pizze_consegnate/' + id, null, this.create_options()).pipe(
            catchError(this.handleError)
        );
    }

    //            CASSIERE
    public get_tavoli_occupati(): Observable < any > {
        console.log("%c GET %c /tavoli_occupati", "color: red", "color: black");
        return this.http.get < any > (this.us.url + '/tavoli_occupati', this.create_options()).pipe(
            tap((data) => data),
            catchError(this.handleError)
        );
    }

    public get_informazioni_ordine(numero: number): Observable < any > {
        console.log("%c GET %c /informazioni_ordine/" + numero, "color: red", "color: black");
        return this.http.get < any > (this.us.url + '/informazioni_ordine/' + numero, this.create_options()).pipe(
            tap((data) => data),
            catchError(this.handleError)
        );
    }

    public get_informazioni_prodotti(id: string): Observable < any > {
        console.log("%c GET %c /informazioni_prodotti/" + id, "color: red", "color: black");
        return this.http.get < any > (this.us.url + '/informazioni_prodotti/' + id, this.create_options()).pipe(
            tap((data) => data),
            catchError(this.handleError)
        );
    }

    public get_totale(tavolo: number): Observable < any > {
        console.log("%c GET %c /calcolo_totale/" + tavolo, "color: red", "color: black");
        return this.http.get < any > (this.us.url + '/calcolo_totale/' + tavolo, this.create_options()).pipe(
            tap((data) => data),
            catchError(this.handleError)
        );
    }

    public pagamento_ordine(tavolo: number): Observable < any > {
        console.log("%c POST %c /pagamento_ordine/" + tavolo, "color: red", "color: black");
        return this.http.post < any > (this.us.url + '/pagamento_ordine/' + tavolo, null, this.create_options()).pipe(
            tap((data) => data),
            catchError(this.handleError)
        );
    }

    public get_camerieri(): Observable < any > {
        console.log("%c GET %c /users_camerieri", "color: red", "color: black");
        return this.http.get < any > (this.us.url + '/users_camerieri', this.create_options()).pipe(
            tap((data) => data),
            catchError(this.handleError)
        );
    }

    public get_pizzaioli(): Observable < any > {
        console.log("%c GET %c /users_pizzaioli", "color: red", "color: black");
        return this.http.get < any > (this.us.url + '/users_pizzaioli', this.create_options()).pipe(
            tap((data) => data),
            catchError(this.handleError)
        );
    }

    public get_baristi(): Observable < any > {
        console.log("%c GET %c /users_baristi", "color: red", "color: black");
        return this.http.get < any > (this.us.url + '/users_baristi', this.create_options()).pipe(
            tap((data) => data),
            catchError(this.handleError)
        );
    }

    public get_cassieri(): Observable < any > {
        console.log("%c GET %c /users_cassieri", "color: red", "color: black");
        return this.http.get < any > (this.us.url + '/users_cassieri', this.create_options()).pipe(
            tap((data) => data),
            catchError(this.handleError)
        );
    }



    public incasso_giorno(): Observable < any > {
        console.log("%c GET %c /incasso_giorno", "color: red", "color: black");
        return this.http.get < any > (this.us.url + '/incasso_giorno', this.create_options()).pipe(
            tap((data) => data),
            catchError(this.handleError)
        );
    }

    public incasso_settimana(): Observable < any > {
        console.log("%c GET %c /incasso_settimana", "color: red", "color: black");
        return this.http.get < any > (this.us.url + '/incasso_settimana', this.create_options()).pipe(
            tap((data) => data),
            catchError(this.handleError)
        );
    }

    public incasso_mese(): Observable < any > {
        console.log("%c GET %c /incasso_mese", "color: red", "color: black");
        return this.http.get < any > (this.us.url + '/incasso_mese', this.create_options()).pipe(
            tap((data) => data),
            catchError(this.handleError)
        );
    }


    //             TUTTI
    public get_tavoli(): Observable < any > {
        console.log("%c GET %c /Elenco_tavoli", "color: red", "color: black");
        return this.http.get < any > (this.us.url + '/Elenco_tavoli', this.create_options()).pipe(
            tap((data) => data),
            catchError(this.handleError)
        );
    }

    public get_bibite(): Observable < any > {
        console.log("%c GET %c /listino_bibite", "color: red", "color: black");
        return this.http.get < any > (this.us.url + '/listino_bibite', this.create_options()).pipe(
            tap((data) => data),
            catchError(this.handleError)
        );
    }

    public get_pizze(): Observable < any > {
        console.log("%c GET %c /listino_pizze", "color: red", "color: black");
        return this.http.get < any > (this.us.url + '/listino_pizze', this.create_options()).pipe(
            tap((data) => data),
            catchError(this.handleError)
        );
    }

    public get_aggiunte_bibite(): Observable < any > {
        console.log("%c GET %c /listino_aggiunte_bibite", "color: red", "color: black");
        return this.http.get < any > (this.us.url + '/listino_aggiunte_bibite', this.create_options()).pipe(
            tap((data) => data),
            catchError(this.handleError)
        );
    }

    public get_aggiunte_pizze(): Observable < any > {
        console.log("%c GET %c /listino_aggiunte_pizze", "color: red", "color: black");
        return this.http.get < any > (this.us.url + '/listino_aggiunte_pizze', this.create_options()).pipe(
            tap((data) => data),
            catchError(this.handleError)
        );
    }


}