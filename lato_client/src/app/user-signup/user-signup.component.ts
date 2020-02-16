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

@Component({
    selector: 'app-user-signup',
    templateUrl: './user-signup.component.html',
    styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

    private errmessage = undefined;
    private posmessage = undefined;
    private user = {
        username: '',
        cognome: '',
        nome: '',
        ruolo: '',
        password: ''
    };

    constructor(private us: UserService, private router: Router) {}

    ngOnInit() {}

    private signup() {
        this.us.register(this.user).subscribe((d) => {
            this.errmessage = undefined;
            this.posmessage = "Registrazione andata a buon fine... Tra poco verrai reindirizato alla pagina precedente";
            setTimeout(() => this.router.navigate(['/gestioneutenti']), 2000);

        }, (err) => {
            console.log('Signup error: ' + JSON.stringify(err.error.errormessage));
            this.errmessage = err.error.errormessage || err.error.message;

        });

    }

}