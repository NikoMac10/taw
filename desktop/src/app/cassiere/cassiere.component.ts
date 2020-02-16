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
    selector: 'app-cassiere',
    templateUrl: './cassiere.component.html',
    styleUrls: ['./cassiere.component.css'],

})
export class CassiereComponent implements OnInit {


    private messages: any[] = [];
    private messages2: any[] = [];
    private messages4: any[] = [];
    private messages3: any;
    private tavolo_libero: boolean;
    private errmessage = undefined;
    private posmessage = undefined;
    private created_date;
    private tavolo = undefined;
    private time = new Date();
    private socket;

    constructor(private sio: SocketioService, private ms: ProductService, private us: UserService, private router: Router) {}

    ngOnInit() {
        this.situazione_tavoli();

        this.socket = this.sio.connect().subscribe((m) => {
            if (m.ruolo.includes(this.us.get_ruolo()) && m.PaginaCassiere.includes("cassiere")) {
                this.situazione_tavoli();
                if (this.tavolo != undefined) {
                    this.bottone_tavolo(this.tavolo);
                }
            }
        });

        setInterval(() => {
            this.time = new Date();
        }, 1000);
    }

    ngOnDestroy() {
        this.socket.unsubscribe();
    }


    private situazione_tavoli() {
        this.ms.get_tavoli().subscribe(
            (messages) => {
                if (messages.error == true)
                    this.errmessage = messages.errormessage;
                else {
                    this.messages = messages;
                    this.errmessage = undefined;
                    this.situazione_tavoli2();
                }
            }, (err) => {
                console.log(err);
            }
        );
    }


    private situazione_tavoli2() {
        this.ms.get_tavoli_occupati().subscribe(
            (messages) => {
                if (messages.error == true)
                    this.errmessage = messages.errormessage;
                else {
                    this.messages2 = messages;
                    this.errmessage = undefined;


                    for (var i = 0; i < this.messages.length; i++)
                        for (var j = 0; j < this.messages2.length; j++)
                            if (this.messages[i].numero == this.messages2[j].tavolo)
                                this.messages[i].occupato = true;

                }
            }, (err) => {
                this.us.renew().subscribe(() => { // Try to renew the token
                    this.situazione_tavoli(); // Succeeded
                }, (err2) => {
                    this.logout(); // Error again, we really need to logout
                });
            }
        );
    }

    private bottone_tavolo(numero: number) {
        this.errmessage = undefined;
        this.ms.get_informazioni_ordine(numero).subscribe(
            (messages) => {
                if (messages.error == true) { //TAVOLO LIBERO
                    this.tavolo_libero = true;
                    this.messages3 = undefined;
                } else {
                    this.tavolo = numero;
                    this.messages3 = messages;
                    this.created_date = new Date(this.messages3.ora_ordine);
                    this.tavolo_libero = false;
                    this.bottone_tavolo2(this.messages3._id);
                }
            }, (err) => {
                this.errmessage = err;
            }
        );
    }

    private bottone_tavolo2(id: string) {
        this.ms.get_informazioni_prodotti(id).subscribe(
            (messages) => {
                this.messages4 = messages;
                this.ms.get_totale(this.messages3.tavolo).subscribe(
                    (messages2) => {
                        if (messages2[0] == undefined)
                            this.messages3.totale = 0;
                        else
                            this.messages3.totale = messages2[0].total;

                        if (this.messages3.stato_bibite == 3 &&
                            this.messages3.stato_pizze == 2)
                            this.messages3.mostra_paga = true;
                        else
                            this.messages3.mostra_paga = false;
                    }, (err) => {
                        this.errmessage += " " + err;

                    });
            }, (err) => {
                this.errmessage += " " + err;
            }
        );
    }

    private paga() {
        this.ms.pagamento_ordine(this.messages3.tavolo).subscribe(
            (messages) => {
                this.posmessage = "Ordine pagato correttamente!";
                setTimeout(() => this.posmessage = undefined, 2000);
            }, (err) => {
                console.log(err);
            });
    }


    private incasso() {
        this.router.navigate(['/incasso']);
    }

    private gestione_utenti() {
        this.router.navigate(['/gestioneutenti']);
    }

    private logout() {
        this.us.logout();
        this.router.navigate(['/']);
    }

}