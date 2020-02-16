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
    selector: 'app-cameriere-prende-ordinazioni',
    templateUrl: './cameriere-prende-ordinazioni.component.html',
    styleUrls: ['./cameriere-prende-ordinazioni.component.css']
})
export class CamerierePrendeOrdinazioniComponent implements OnInit {

    private tavolo: any;
    private messages: any[] = [];
    private messages2: any[] = [];
    private messages3: any[] = [];
    private ArticoloSelezionato: String = "";
    private AggiunteSelezionate: String[] = [];
    private errmessage = undefined;
    private posmessage = undefined;
    private textValue: number = undefined;
    private i: number = 0;
    private error: any;


    constructor(private sio: SocketioService, private ms: ProductService, private us: UserService, private router: Router) {}

    ngOnInit() {
        this.tavolo = (this.us as any).leggi_id();
        this.get_bibite();
        this.get_aggiunte();
    }


    private get_bibite() {
        this.ms.get_bibite().subscribe(
            (messages) => {
                this.messages = messages;
            }, (err) => {
                console.log(err);
            }
        );
    }

    private bibite(nome: String) {
        this.posmessage = undefined;
        for (var i = 0; i < this.messages.length; i++) {
            if (this.messages[i].nome == nome) {
                this.messages[i].booleano = true;
                this.ArticoloSelezionato = nome;
            } else
                this.messages[i].booleano = false;
        }
    }

    private get_aggiunte() {
        this.ms.get_aggiunte_bibite().subscribe(
            (messages) => {
                this.messages2 = messages;
            }, (err) => {
                console.log(err);
            }
        );
    }

    private aggiunte(nome: String) {
        this.posmessage = undefined;
        for (var i = 0; i < this.messages2.length; i++) {
            if (this.AggiunteSelezionate.includes(this.messages2[i].nome) && (this.messages2[i].nome == nome)) {
                this.messages2[i].booleano = false;
                this.AggiunteSelezionate.splice(this.AggiunteSelezionate.indexOf(this.messages2[i].nome), 1);
            } else if (this.messages2[i].nome == nome) {
                this.messages2[i].booleano = true;
                this.AggiunteSelezionate.push(nome);
            }
        }
    }

    private AggiungiArt() {
        if (this.ArticoloSelezionato == "" || this.textValue == 0 || this.textValue == undefined) {
            this.errmessage = "Articolo o quantità non selezionata";
            this.posmessage = undefined;
        } else {


            for (var appo = 0; appo < this.textValue; appo++) {
                this.errmessage = undefined;

                var body = {
                    "nome_prodotto": this.ArticoloSelezionato,
                    "aggiunte": this.AggiunteSelezionate
                };

                this.ms.aggiungi_prodotto(this.tavolo.id, body).subscribe(
                    (messages) => {
                        messages

                    }, (err) => {
                        console.log(err);
                        if (this.error == undefined)
                            this.error = err;

                    });
            }

            if (this.error == undefined) {
                this.posmessage = "Prodotto aggiunto correttamente!";
                this.messages3[this.i] = {};
                this.messages3[this.i].nome = this.ArticoloSelezionato;
                this.messages3[this.i].quantita = this.textValue;
                this.messages3[this.i].aggiunte = this.AggiunteSelezionate;
                this.i++;
                this.ArticoloSelezionato = "";
                this.AggiunteSelezionate = [];
                for (var i = 0; i < this.messages2.length; i++) {
                    this.messages2[i].booleano = false;
                }
                for (var i = 0; i < this.messages.length; i++) {
                    this.messages[i].booleano = false;
                }
            } else if (this.error != undefined)
                this.errmessage = this.error;

            this.error == undefined;
        }

    }


    private ChiudiOrdinazioneBibite() {
        this.router.navigate(['/cameriereOrd2']);
    }

}