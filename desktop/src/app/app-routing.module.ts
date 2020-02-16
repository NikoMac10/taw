import {
    NgModule
} from '@angular/core';
import {
    CommonModule
} from '@angular/common';
import {
    RouterModule,
    Routes
} from '@angular/router';
import {
    UserLoginComponent
} from './user-login/user-login.component';
import {
    AppComponent
} from './app.component';
import {
    UserSignupComponent
} from './user-signup/user-signup.component';
import {
    CameriereComponent
} from './cameriere/cameriere.component';
import {
    BaristaComponent
} from './barista/barista.component';
import {
    PizzaioloComponent
} from './pizzaiolo/pizzaiolo.component';
import {
    CassiereComponent
} from './cassiere/cassiere.component';
import {
    CamerierePrendeOrdinazioniComponent
} from './cameriere-prende-ordinazioni/cameriere-prende-ordinazioni.component'
import {
    CameriereConsegnaOrdinazioniComponent
} from './cameriere-consegna-ordinazioni/cameriere-consegna-ordinazioni.component'
import {
    CamerierePrendeOrdinazioni2Component
} from './cameriere-prende-ordinazioni2/cameriere-prende-ordinazioni2.component';
import {
    CassiereIncassoComponent
} from './cassiere-incasso/cassiere-incasso.component';
import {
    CassiereGestioneUtentiComponent
} from './cassiere-gestione-utenti/cassiere-gestione-utenti.component';


const routes: Routes = [{
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: UserLoginComponent
    },
    {
        path: 'signup',
        component: UserSignupComponent
    },
    {
        path: 'cameriere',
        component: CameriereComponent
    },
    {
        path: 'barista',
        component: BaristaComponent
    },
    {
        path: 'pizzaiolo',
        component: PizzaioloComponent
    },
    {
        path: 'cassiere',
        component: CassiereComponent
    },
    {
        path: 'cameriereOrd',
        component: CamerierePrendeOrdinazioniComponent
    },
    {
        path: 'cameriereOrd2',
        component: CamerierePrendeOrdinazioni2Component
    },
    {
        path: 'cameriereCons',
        component: CameriereConsegnaOrdinazioniComponent
    },
    {
        path: 'incasso',
        component: CassiereIncassoComponent
    },
    {
        path: 'gestioneutenti',
        component: CassiereGestioneUtentiComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {}