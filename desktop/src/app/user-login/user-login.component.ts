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
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

    private errmessage = undefined;
    constructor(private us: UserService, private router: Router) {}

    ngOnInit() {
        this.us.renew().subscribe((d) => {
            this.router.navigate(['/' + this.us.get_ruolo().toLowerCase()]);
        }, (err) => {
            err;
        });
    }

    private login(mail: string, password: string, remember: boolean) {
        this.us.login(mail, password, remember).subscribe((d) => {
            console.log('Login avvenuto correttamente come: ' + this.us.get_username().toLowerCase());
            this.errmessage = undefined;
            this.router.navigate(['/' + this.us.get_ruolo().toLowerCase()]);
        }, (err) => {
            console.log('Login error: ' + JSON.stringify(err.error.errormessage));
            this.errmessage = err.error.errormessage;

        });

    }

}