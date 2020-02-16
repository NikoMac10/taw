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
    selector: 'app-cameriere',
    templateUrl: './cameriere.component.html',
    styleUrls: ['./cameriere.component.css']
})
export class CameriereComponent implements OnInit {


    constructor(private sio: SocketioService, private ms: ProductService, private us: UserService, private router: Router) {}


    private messages: any[] = [];
    private errmessage = undefined;
    private numero: number = undefined;
    private time = new Date();
    private numero_consegne = undefined;
    private socket;

    ngOnInit() {
        this.ordini_da_consegnare();
        this.get_tavoli();
        this.socket = this.sio.connect().subscribe((m) => {
            if (m.ruolo.includes(this.us.get_ruolo()) && m.Cameriere == this.us.get_username()) {
                this.ordini_da_consegnare();
            } else if (m.ruolo.includes(this.us.get_ruolo())) {
                this.get_tavoli();
            }

        });

        setInterval(() => {
            this.time = new Date();
        }, 1000);
    }

    ngOnDestroy() {
        this.socket.unsubscribe();
    }


    private get_tavoli() {
        this.ms.get_tavoli().subscribe(
            (messages) => {
                this.messages = messages;
            }, (err) => {

            }
        );
    }


    private tavolo(numero: any) {
        this.errmessage = undefined;
        this.numero = numero;
        for (var i = 0; i < this.messages.length; i++)
            if (this.messages[i].numero == numero)
                this.messages[i].booleano = true;
            else
                this.messages[i].booleano = false;

    }

    private crea_ordine(nPersone: any) {
        nPersone = parseInt(nPersone, 10)
        if (nPersone > 0) {
            this.ms.crea_ordine(this.numero, nPersone).subscribe(
                (messages) => {

                    if (messages.error == true)
                        this.errmessage = messages.errormessage;
                    else {
                        this.us.salva_id(messages.id, this.numero, nPersone);
                        this.router.navigate(['/cameriereOrd']);
                    }
                }, (err) => {
                    console.log(err);
                });
        } else
            this.errmessage = "Numero persone non definito";
    }

    private ordini_da_consegnare() {
        this.ms.ordini_da_consegnare().subscribe(
            (messages) => {
                this.numero_consegne = messages.length;


            }, (err) => {
                this.us.renew().subscribe(() => { // Try to renew the token
                    this.ordini_da_consegnare(); // Succeeded
                }, (err2) => {
                    this.logout(); // Error again, we really need to logout
                });
                console.log(err);
            }
        );
    }

    private consega_ordini() {
        this.router.navigate(['/cameriereCons']);
    }

    private logout() {
        this.us.logout();
        this.router.navigate(['/']);
    }


}