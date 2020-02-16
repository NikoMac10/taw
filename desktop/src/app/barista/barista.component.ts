import {
    Component, OnInit
}
from '@angular/core';
import {
    UserService
}
from '../user.service';
import {
    Router
}
from '@angular/router';
import {
    SocketioService
}
from '../socketio.service';
import {
    ProductService
}
from '../prodotti.service';

@
Component({
    selector: 'app-barista',
    templateUrl: './barista.component.html',
    styleUrls: ['./barista.component.css']
})
export class BaristaComponent implements OnInit {

    constructor(private sio: SocketioService, private ms: ProductService, private us: UserService, private router: Router) {}

    private messages: any[] = [];
    private tavolo: number = undefined;
    private ora_ordine: string = undefined;
    private errmessage = undefined;
    private posmessage = undefined;
    private time = new Date();
    private socket;


    ngOnInit() {
        this.prossima_ord_barista();
        this.socket = this.sio.connect().subscribe((m) => {
            if (m.ruolo.includes(this.us.get_ruolo()))
                if (this.messages.length == 0) {
                    this.prossima_ord_barista();
                }

        });
        setInterval(() => {
            this.time = new Date();
        }, 1000);
    }

    ngOnDestroy() {
        this.socket.unsubscribe();

        if (this.messages[0]) {
            this.ms.abbandona_ordine_bibite(this.messages[0].ordine).subscribe(
                (messages) => {
                    messages;
                }, (err) => {
                    console.log(err);
                });
        }
    }


    private prossima_ord_barista() {
        this.ms.prossima_ord_barista().subscribe(
            (messages) => {
                if (messages.error == true) {
                    this.errmessage = messages.errormessage;
                    this.messages = [];
                } else {
                    this.tavolo = messages.tavolo;
                    this.ora_ordine = messages.ora_ordine;
                    this.messages = messages.prodotti;
                    this.errmessage = undefined;
                }
            }, (err) => {

                this.us.renew().subscribe(() => { // Try to renew the token
                    this.prossima_ord_barista(); // Succeeded
                }, (err2) => {
                    this.logout(); // Error again, we really need to logout
                });
            }
        );
    }


    private bibite_pronte() {
        this.ms.bibite_pronte(this.messages[0].ordine).subscribe(
            (messages) => {
                this.tavolo = undefined;
                this.ora_ordine = undefined;
                this.posmessage = "Ordine bibite preparato correttamente";
                this.prossima_ord_barista();

                setTimeout(() => this.posmessage = undefined, 2000);

            }, (err) => {
                console.log(err);
                this.errmessage = "err"
            }
        );
    }

    private logout() {
        this.socket.unsubscribe();
        if (this.messages[0]) {
            this.ms.abbandona_ordine_bibite(this.messages[0].ordine).subscribe(
                (messages) => {
					this.messages[0] = undefined; 
                    this.logout2();
                }, (err) => {
                    console.log(err);
                    this.errmessage = "err";
                    this.logout2();
                });
        } else
            this.logout2();
    }


    private logout2() {
		this.us.logout();
        this.router.navigate(['/']);
    }
}