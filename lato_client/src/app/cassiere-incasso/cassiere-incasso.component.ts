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
    selector: 'app-cassiere-incasso',
    templateUrl: './cassiere-incasso.component.html',
    styleUrls: ['./cassiere-incasso.component.css']
})
export class CassiereIncassoComponent implements OnInit {

    constructor(private sio: SocketioService, private ms: ProductService, private us: UserService, private router: Router) {}

    private time = new Date();
    private socket;
    private giorno: number = 0;
    private settimana: number = 0;
    private mese: number = 0;

    ngOnInit() {

        this.get_incasso();

        this.socket = this.sio.connect().subscribe((m) => {
            if (m.ruolo.includes(this.us.get_ruolo()) && m.PaginaCassiere.includes("incasso")) {
                this.get_incasso();
            }
        });


        setInterval(() => {
            this.time = new Date();
        }, 1000);
    }

    ngOnDestroy() {
        this.socket.unsubscribe();
    }

    private get_incasso() {
        this.ms.incasso_giorno().subscribe(
            (messages) => {
                this.giorno = messages;
                this.ms.incasso_settimana().subscribe(
                    (messages) => {

                        this.settimana = messages;

                        this.ms.incasso_mese().subscribe(
                            (messages) => {

                                this.mese = messages;

                            }, (err) => {
                                console.log(err);
                            });

                    }, (err) => {
                        console.log(err);
                    });

            }, (err) => {
                console.log("errore");
                this.us.renew().subscribe(() => { // Try to renew the token
                    this.get_incasso(); // Succeeded
                }, (err2) => {
                    this.logout(); // Error again, we really need to logout
                });
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