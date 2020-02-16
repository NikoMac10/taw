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
    selector: 'app-cameriere-prende-ordinazioni2',
    templateUrl: './cameriere-prende-ordinazioni2.component.html',
    styleUrls: ['./cameriere-prende-ordinazioni2.component.css']
})
export class CamerierePrendeOrdinazioni2Component implements OnInit {

    private tavolo: any;
    private messages: any[] = [];
    private messages2: any[] = [];
    private messages3: any[] = [];
    private ArticoloSelezionato: String = "";
    private AggiunteSelezionate: String[] = [];
    private errmessage = undefined;
    private posmessage = undefined;
    private errmessage2 = undefined;
    private posmessage2 = undefined;
    private textValue: number = undefined;
    private i: number = 0;
    private error: any;


    constructor(private sio: SocketioService, private ms: ProductService, private us: UserService, private router: Router) {}

    ngOnInit() {
        this.tavolo = (this.us as any).leggi_id();
        this.get_pizze();
        this.get_aggiunte();
    }


    private get_pizze() {
        this.ms.get_pizze().subscribe(
            (messages) => {
                this.messages = messages;
            }, (err) => {
                console.log(err);
            }
        );
    }

    private pizze(nome: String) {
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
        this.ms.get_aggiunte_pizze().subscribe(
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


    private ChiudiOrdinazioneTotale() {
        this.ms.chiudi_ordine(this.tavolo.id).subscribe(
            (messages) => {

                this.posmessage2 = "Ordine chiuso correttamente tra pochi istanti" +
                    " verrai reindirizzato nella schermata principale";
                setTimeout(() => this.router.navigate(['/cameriere']), 2000);
            }, (err) => {
                this.errmessage2 = "Qualcosa è andato storto: " + err;
                console.log(err);
            });
    }

}