import {
    Component,
    OnInit
} from '@angular/core';
import {
    UserService
} from '../user.service';
import {
    Router
} from '@angular/router';
import {
    SocketioService
} from '../socketio.service';
import {
    ProductService
} from '../prodotti.service';


@Component({
    selector: 'app-cassiere-gestione-utenti',
    templateUrl: './cassiere-gestione-utenti.component.html',
    styleUrls: ['./cassiere-gestione-utenti.component.css']
})
export class CassiereGestioneUtentiComponent implements OnInit {

    constructor(private sio: SocketioService, private ms: ProductService, private us: UserService, private router: Router) {}

    private time = new Date();
    private messages: any[] = [];
    private messages2: any[] = [];
    private messages3: any[] = [];
    private messages4: any[] = [];
    private messages5: any[] = [];
    private errmessage: string = undefined;
    private posmessage: string = undefined;
    private idPremuto: number = 0;
    private socket;

    ngOnInit() {

        this.get_users();

        this.socket = this.sio.connect().subscribe((m) => {
            if (m.ruolo.includes(this.us.get_ruolo()) && m.PaginaCassiere.includes("gestione_utenti")) {
                this.get_users();
            }
        });

        setInterval(() => {
            this.time = new Date();
        }, 1000);
    }

    ngOnDestroy() {
        this.socket.unsubscribe();
    }

    private get_users() {
        this.us.get_camerieri().subscribe(
            (messages) => {
                this.messages = messages;

                this.us.get_pizzaioli().subscribe(
                    (messages2) => {
                        this.messages2 = messages2;

                        this.us.get_baristi().subscribe(
                            (messages3) => {
                                this.messages3 = messages3;

                                this.us.get_cassieri().subscribe(
                                    (messages4) => {
                                        this.messages4 = messages4;

                                        this.utente_premuto(this.idPremuto);

                                    }, (err) => {
                                        console.log(err);
                                    });

                            }, (err) => {
                                console.log(err);
                            });
                    }, (err) => {
                        console.log(err);
                    });

            }, (err) => {
                console.log("errore");
                this.us.renew().subscribe(() => { // Try to renew the token
                    this.get_users(); // Succeeded
                }, (err2) => {
                    this.logout(); // Error again, we really need to logout
                });
                console.log(err);
            });
    }

    private elimina_utente(id: any) {
        if (confirm("Vuoi davvero eliminare l'utente?")) {
            this.idPremuto = 0;
            (this.us as any).delete_users(id).subscribe(
                (messages) => {
                    messages
                }, (err) => {
                    console.log(err);
                });

        }
    }

    private utente_premuto(id: any) {
        this.idPremuto = id;

        this.messages5 = [];
        var i;
        for (i = 0; i < this.messages.length; i++)
            if (this.messages[i]._id == id)
                this.messages[i].booleano = true;
            else
                this.messages[i].booleano = false;

        for (i = 0; i < this.messages2.length; i++)
            if (this.messages2[i]._id == id)
                this.messages2[i].booleano = true;
            else
                this.messages2[i].booleano = false;

        for (i = 0; i < this.messages3.length; i++)
            if (this.messages3[i]._id == id)
                this.messages3[i].booleano = true;
            else
                this.messages3[i].booleano = false;

        for (i = 0; i < this.messages4.length; i++)
            if (this.messages4[i]._id == id)
                this.messages4[i].booleano = true;
            else
                this.messages4[i].booleano = false;


        if (id != 0)
            this.get_statistiche(id);
    }


    private get_statistiche(id: any) {
        this.us.statistiche_dipendente(id).subscribe(
            (messages) => {
                var a = Object.getOwnPropertyNames(messages.risultato);
                for (var b = 0; b < a.length; b++) {
                    var appo = a[b];
                    a[b] = a[b].replace(/_/g, " ");
                    a[b] = a[b].charAt(0).toUpperCase() + a[b].slice(1);
                    this.messages5.push(a[b] + " : " + messages.risultato[appo]);
                }
            }, (err) => {
                console.log(err);
            });

    }


    private indietro() {
        this.router.navigate(['/cassiere']);
    }

    private logout() {
        this.us.logout();
        this.router.navigate(['/']);
    }

}