import {
    BrowserModule
} from '@angular/platform-browser';
import {
    NgModule
} from '@angular/core';
import {
    FormsModule
} from '@angular/forms';
import {
    HttpClientModule
} from '@angular/common/http';


import {
    AppComponent
} from './app.component';


// Services

import {
    ProductService
} from './prodotti.service';
import {
    UserService
} from './user.service';
import {
    UserLoginComponent
} from './user-login/user-login.component';
import {
    AppRoutingModule
} from './/app-routing.module';
import {
    UserSignupComponent
} from './user-signup/user-signup.component';
import {
    SocketioService
} from './socketio.service';
import {
    CameriereComponent
} from './cameriere/cameriere.component';
import {
    PizzaioloComponent
} from './pizzaiolo/pizzaiolo.component';
import {
    BaristaComponent
} from './barista/barista.component';
import {
    CassiereComponent
} from './cassiere/cassiere.component';
import {
    CamerierePrendeOrdinazioniComponent
} from './cameriere-prende-ordinazioni/cameriere-prende-ordinazioni.component';
import {
    CameriereConsegnaOrdinazioniComponent
} from './cameriere-consegna-ordinazioni/cameriere-consegna-ordinazioni.component';
import {
    CamerierePrendeOrdinazioni2Component
} from './cameriere-prende-ordinazioni2/cameriere-prende-ordinazioni2.component';
import {
    CassiereIncassoComponent
} from './cassiere-incasso/cassiere-incasso.component';
import {
    CassiereGestioneUtentiComponent
} from './cassiere-gestione-utenti/cassiere-gestione-utenti.component';


@NgModule({
    declarations: [
        AppComponent,
        UserLoginComponent,
        UserSignupComponent,
        CameriereComponent,
        PizzaioloComponent,
        BaristaComponent,
        CassiereComponent,
        CamerierePrendeOrdinazioniComponent,
        CameriereConsegnaOrdinazioniComponent,
        CamerierePrendeOrdinazioni2Component,
        CassiereIncassoComponent,
        CassiereGestioneUtentiComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [UserService, SocketioService, ProductService],
    bootstrap: [AppComponent]
})
export class AppModule {}