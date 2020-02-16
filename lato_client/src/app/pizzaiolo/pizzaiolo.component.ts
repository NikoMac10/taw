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
    selector: 'app-pizzaiolo',
    templateUrl: './pizzaiolo.component.html',
    styleUrls: ['./pizzaiolo.component.css']
})
export class PizzaioloComponent implements OnInit {

    constructor(private sio: SocketioService, private ms: ProductService, private us: UserService, private router: Router) {}

    private messages: any[] = [];
    private tavolo: number = undefined;
    private ora_ordine: string = undefined;
    private errmessage = undefined;
    private posmessage = undefined;
    private time = new Date();
    private socket;


    ngOnInit() {
        this.prossima_ord_pizzaiolo();
        this.socket = this.sio.connect().subscribe((m) => {
            if (m.ruolo.includes(this.us.get_ruolo()))
                this.prossima_ord_pizzaiolo();
        });

        setInterval(() => {
            this.time = new Date();
        }, 1000);
    }

    ngOnDestroy() {
        this.socket.unsubscribe();
    }

    private prossima_ord_pizzaiolo() {
        this.ms.prossima_ord_pizzaiolo().subscribe(
            (messages) => {
                if (messages.error == true)
                    this.errmessage = messages.errormessage;
                else {
                    this.tavolo = messages.tavolo;
                    this.ora_ordine = messages.ora_ordine;
                    this.messages = messages.prodotti;
                    this.errmessage = undefined;
                }
            }, (err) => {
                this.us.renew().subscribe(() => { // Try to renew the token
                    this.prossima_ord_pizzaiolo(); // Succeeded
                }, (err2) => {
                    this.logout(); // Error again, we really need to logout
                });
            }
        );
    }


    private inizio_fine_preparazione(inizio_fine: number, id: string) {
        if (inizio_fine == 0) {
            this.ms.pizza_inizio_preparazione(id).subscribe(
                (messages) => {
                    messages

                }, (err) => {
                    console.log(err);
                    this.errmessage = err;
                });
        } else {
            this.ms.pizza_fine_preparazione(id).subscribe(
                (messages) => {
                    if (this.messages[1] == undefined) {

                        this.ms.pizze_pronte(this.messages[0].ordine).subscribe(
                            (messages) => {
                                this.tavolo = undefined;
                                this.ora_ordine = undefined;
                                this.posmessage = "Tutte le pizze dell'ordine sono state preparate correttamente";

                            }, (err) => {
                                console.log(err);
                                this.errmessage = err;

                            });

                        setTimeout(() => this.posmessage = undefined, 2000);
                    }


                }, (err) => {
                    console.log(err);
                    this.errmessage = err;
                });
        }
    }

    private logout() {
        this.us.logout();
        this.router.navigate(['/']);
    }


}