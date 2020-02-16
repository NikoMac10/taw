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
    selector: 'app-cameriere-consegna-ordinazioni',
    templateUrl: './cameriere-consegna-ordinazioni.component.html',
    styleUrls: ['./cameriere-consegna-ordinazioni.component.css']
})
export class CameriereConsegnaOrdinazioniComponent implements OnInit {

    constructor(private sio: SocketioService, private ms: ProductService, private us: UserService, private router: Router) {}

    private time = new Date();
    private messages: any[] = [];
    private messages2: any[] = [];
    private errmessage: string = undefined;
    private errmessage2: string = undefined;
    private errmessage3: string = undefined;
    private posmessage: string = undefined;
    private socket;

    ngOnInit() {

        this.ordini_da_consegnare();

        this.socket = this.sio.connect().subscribe((m) => {
            if (m.ruolo.includes(this.us.get_ruolo()) && m.Cameriere == this.us.get_username()) {
                this.ordini_da_consegnare();
            }
        });

        setInterval(() => {
            this.time = new Date();
        }, 1000);
    }

    ngOnDestroy() {
        this.socket.unsubscribe();
    }

    private btn_bibite_consegnate(id: string) {
        this.errmessage = undefined;
        this.ms.bibite_consegnate(id).subscribe(
            (messages) => {
                this.posmessage = "Ordine bibite consegnato correttamente";
                this.ordini_da_consegnare();
                setTimeout(() => this.posmessage = undefined, 2000);

            }, (err) => {
                console.log(err);
                this.errmessage = err;
            }
        );
    }

    private btn_pizze_consegnate(id: string) {
        this.errmessage = undefined;
        this.ms.pizze_consegnate(id).subscribe(
            (messages) => {

                this.posmessage = "Ordine pizze consegnato correttamente";
                this.ordini_da_consegnare();
                setTimeout(() => this.posmessage = undefined, 2000);

            }, (err) => {
                console.log(err);
                this.errmessage = err;
            }
        );
    }

    private ordini_da_consegnare() {
        this.ms.ordini_da_consegnare().subscribe(
            (messages) => {

                this.messages = [];
                this.messages2 = [];
                this.errmessage2 = undefined;
                this.errmessage3 = undefined;

                for (var i = 0; i < messages.length; i++) {
                    if (messages[i].stato_bibite == 2 && messages[i].stato_pizze == 1) {
                        this.messages.push(messages[i]);
                        this.messages2.push(messages[i]);
                    } else if (messages[i].stato_bibite == 2)
                        this.messages.push(messages[i]);
                    else
                        this.messages2.push(messages[i]);
                }

                this.errmessage2 = this.messages[0] == undefined ? "Nessuna bibita da consegnare" : undefined;
                this.errmessage3 = this.messages2[0] == undefined ? "Nessuna pizza da consegnare" : undefined;

            }, (err) => {
                this.us.renew().subscribe(() => { // Try to renew the token
                    this.ordini_da_consegnare(); // Succeeded
                }, (err2) => {
                    this.us.logout(); // Error again, we really need to logout
                });
                console.log(err);
            }
        );
    }

    private indietro() {
        this.router.navigate(['/cameriere']);
    }

}