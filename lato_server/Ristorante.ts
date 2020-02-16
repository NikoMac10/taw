const result = require("dotenv").config(); // The dotenv module will load a file named ".env"
// file and load all the key-value pairs into
// process.env (environment variable)
if (result.error) {
    console.log(
        'Unable to load ".env" file. Please provide one to store the JWT secret key'
    );
    process.exit(-1);
}
if (!process.env.JWT_SECRET) {
    console.log(
        '".env" file loaded but JWT_SECRET=<secret> key-value pair was not found'
    );
    process.exit(-1);
}

import fs = require('fs');
import http = require('http'); // HTTP module
import https = require('https'); // HTTPS module
import colors = require('colors');
colors.enabled = true;


import mongoose = require('mongoose');
import {
    Listino_pizze
} from './Listino_pizze';
import * as pizze from './Listino_pizze';

import {
    Listino_bibite
} from './Listino_bibite';
import * as bibite from './Listino_bibite';

import {
    User
} from './User';
import * as user from './User';

import {
    Prodotti_ordinati
} from './Prodotti_ordinati';
import * as prodotti_ordinati from './Prodotti_ordinati';


import {
    Ordini
} from './Ordini';
import * as ordini from './Ordini';


import {
    Listino_aggiunte
} from './Listino_aggiunte';
import * as aggiunte from './Listino_aggiunte';

import {
    Elenco_tavoli
} from './Elenco_tavoli';
import * as tavoli from './Elenco_tavoli';



import express = require('express');
import bodyparser = require('body-parser'); // body-parser middleware is used to parse the request body and
// directly provide a Javascript object if the "Content-type" is
// application/json

import passport = require('passport'); // authentication middleware for express
import passportHTTP = require('passport-http'); // implements Basic and Digest authentication for HTTP (used for /login endpoint)

import jsonwebtoken = require('jsonwebtoken'); // JWT generation
import jwt = require('express-jwt'); // JWT parsing middleware for express

import cors = require('cors'); // Enable CORS middleware
import io = require('socket.io'); // Socket.io websocket library

var ios = undefined;
var app = express();


// We create the JWT authentication middleware
// provided by the express-jwt library.
//
// How it works (from the official documentation):
// If the token is valid, req.user will be set with the JSON object
// decoded to be used by later middleware for authorization and access control.
//
var auth = jwt({
    secret: process.env.JWT_SECRET
});

app.use(cors());

// Install the top-level middleware "bodyparser"
app.use(bodyparser.json());

// Add API routes to express application
//

app.get("/", (req, res) => {
    res.status(200).json({
        api_version: "1.0",
        endpoints: ["/listino_pizze", "/listino_bibite", "/listino_aggiunte_pizze", "/listino_aggiunte_bibite", "/elenco_tavoli", "/users_camerieri", "/users_pizzaioli", "/users_baristi", "/users_cassieri", "/renew", "/utente", "/utente/:id", "/crea_ordine", "/aggiungi_prodotto/:id_ordine", "/chiudi_ordine/:id_ordine", "/prossima_ord_barista", "/abbandona_ordine_bibite/:id_ordine", "/bibite_pronte/:id_ordine", "/prossima_ord_pizzaiolo", "/pizza_inizio_preparazione/:id_prodotto", "/pizza_fine_preparazione/:id_prodotto", "/pizze_pronte/:id_ordine", "/ordini_da_consegnare", "/bibite_consegnate/:id_ordine", "/pizze_consegnate/:id_ordine", "/tavoli_occupati", "/informazioni_ordine/:numero_tavolo", "/informazioni_prodotti/:id_ordine", "/calcolo_totale/:numero_tavolo", "/pagamento_ordine/:numero_tavolo", "/incasso_giorno", "/incasso_settimana", "/incasso_mese", "/statistiche_dipendente/:id", ]
    });
});

app.get("/listino_pizze", (req, res) => {
    pizze
        .getModel()
        .find()
        .sort({
            nome: 1
        })
        .then(documents => {
            console.log('GET'.red, ' /listino_pizze'.white);
            return res.status(200).json(documents);
        })
        .catch(reason => {
            return next({
                statusCode: 404,
                error: true,
                errormessage: "DB error: " + reason
            });
        });
});

app.get("/listino_bibite", (req, res) => {
    bibite
        .getModel()
        .find()
        .sort({
            nome: 1
        })
        .then(documents => {
            console.log('GET'.red, ' /listino_bibite'.white);
            return res.status(200).json(documents);
        })
        .catch(reason => {
            return next({
                statusCode: 404,
                error: true,
                errormessage: "DB error: " + reason
            });
        });
});

app.get("/listino_aggiunte_pizze", (req, res) => {
    aggiunte
        .getModel()
        .find({
            pizza_bibita: true
        })
        .sort({
            nome: 1
        })
        .then(documents => {
            console.log('GET'.red, ' /listino_aggiunte_pizze'.white);
            return res.status(200).json(documents);
        })
        .catch(reason => {
            return next({
                statusCode: 404,
                error: true,
                errormessage: "DB error: " + reason
            });
        });
});

app.get("/listino_aggiunte_bibite", (req, res) => {
    aggiunte
        .getModel()
        .find({
            pizza_bibita: false
        })
        .sort({
            nome: 1
        })
        .then(documents => {
            console.log('GET'.red, ' /listino_aggiunte_bibite'.white);
            return res.status(200).json(documents);
        })
        .catch(reason => {
            return next({
                statusCode: 404,
                error: true,
                errormessage: "DB error: " + reason
            });
        });
});


app.get("/elenco_tavoli", (req, res) => {
    tavoli
        .getModel()
        .find()
        .sort({
            numero: 1
        })
        .then(documents => {
            console.log('GET'.red, ' /elenco_tavoli'.white);
            return res.status(200).json(documents);
        })
        .catch(reason => {
            return next({
                statusCode: 404,
                error: true,
                errormessage: "DB error: " + reason
            });
        });
});

app.get("/users_camerieri", auth, (req, res, next) => {
    if (req.user.ruolo == "Cassiere") {
        user.getModel()
            .find({
                ruolo: "Cameriere"
            }, {
                digest: 0,
                salt: 0
            })
            .then(users => {
                console.log('GET'.red, ' /users_camerieri'.white);
                console.log('Richiesta eseguita da: '.yellow, req.user.cognome + " " + req.user.nome + ", " + req.user.ruolo);
                return res.status(200).json(users);
            })
            .catch(reason => {
                return next({
                    statusCode: 404,
                    error: true,
                    errormessage: "DB error: " + reason
                });
            });
    } else
        return next({
            statusCode: 404,
            error: true,
            errormessage: "you do not have the necessary privileges to access this API"
        });
});

app.get("/users_baristi", auth, (req, res, next) => {
    if (req.user.ruolo == "Cassiere") {
        user.getModel()
            .find({
                ruolo: "Barista"
            }, {
                digest: 0,
                salt: 0
            })
            .then(users => {
                console.log('GET'.red, ' /users_baristi'.white);
                console.log('Richiesta eseguita da: '.yellow, req.user.cognome + " " + req.user.nome + ", " + req.user.ruolo);
                return res.status(200).json(users);
            })
            .catch(reason => {
                return next({
                    statusCode: 404,
                    error: true,
                    errormessage: "DB error: " + reason
                });
            });
    } else
        return next({
            statusCode: 404,
            error: true,
            errormessage: "you do not have the necessary privileges to access this API"
        });
});

app.get("/users_pizzaioli", auth, (req, res, next) => {
    if (req.user.ruolo == "Cassiere") {
        user.getModel()
            .find({
                ruolo: "Pizzaiolo"
            }, {
                digest: 0,
                salt: 0
            })
            .then(users => {
                console.log('GET'.red, ' /users_pizzaioli'.white);
                console.log('Richiesta eseguita da: '.yellow, req.user.cognome + " " + req.user.nome + ", " + req.user.ruolo);
                return res.status(200).json(users);
            })
            .catch(reason => {
                return next({
                    statusCode: 404,
                    error: true,
                    errormessage: "DB error: " + reason
                });
            });
    } else
        return next({
            statusCode: 404,
            error: true,
            errormessage: "you do not have the necessary privileges to access this API"
        });
});

app.get("/users_cassieri", auth, (req, res, next) => {
    if (req.user.ruolo == "Cassiere") {
        user.getModel()
            .find({
                ruolo: "Cassiere"
            }, {
                digest: 0,
                salt: 0
            })
            .then(users => {
                console.log('GET'.red, ' /cassieri'.white);
                console.log('Richiesta eseguita da: '.yellow, req.user.cognome + " " + req.user.nome + ", " + req.user.ruolo);
                return res.status(200).json(users);
            })
            .catch(reason => {
                return next({
                    statusCode: 404,
                    error: true,
                    errormessage: "DB error: " + reason
                });
            });
    } else
        return next({
            statusCode: 404,
            error: true,
            errormessage: "you do not have the necessary privileges to access this API"
        });
});


app.get("/renew", auth, (req, res, next) => {
    var tokendata = req.user;
    delete tokendata.iat;
    delete tokendata.exp;
    console.log("Renewing token for user " + JSON.stringify(tokendata));
    var token_signed = jsonwebtoken.sign(tokendata, process.env.JWT_SECRET, {
        expiresIn: "1h"
    });
    return res
        .status(200)
        .json({
            error: false,
            errormessage: "",
            token: token_signed
        });
});

// Configure HTTP basic authentication strategy
// trough passport middleware.
// NOTE: Always use HTTPS with Basic Authentication

passport.use(
    new passportHTTP.BasicStrategy(function(username, password, done) {
        // Delegate function we provide to passport middleware
        // to verify user credentials

        console.log("Nuova richiesta di login da ".green + username);
        user.getModel().findOne({
            username: username
        }, (err, user) => {
            if (err) {
                return done({
                    statusCode: 500,
                    error: true,
                    errormessage: err
                });
            }
            if (!user) {
                return done({
                    statusCode: 500,
                    error: true,
                    errormessage: "Invalid user"
                });
            }
            if (user.validatePassword(password)) {
                return done(null, user);
            }
            return done({
                statusCode: 500,
                error: true,
                errormessage: "Invalid password"
            });
        });
    })
);

// Login endpoint uses passport middleware to check
// user credentials before generating a new JWT
app.get("/login", passport.authenticate("basic", {
        session: false
    }),
    (req, res, next) => {
        // If we reach this point, the user is successfully authenticated and
        // has been injected into req.user

        // We now generate a JWT with the useful user data
        // and return it as response

        var tokendata = {
            username: req.user.username,
            cognome: req.user.cognome,
            nome: req.user.nome,
            ruolo: req.user.ruolo
        };

        console.log("Login avvenuto con successo. Sto generando il token");
        var token_signed = jsonwebtoken.sign(
            tokendata,
            process.env.JWT_SECRET, {
                expiresIn: "1h"
            }
        );

        // Note: You can manually check the JWT content at https://jwt.io

        return res
            .status(200)
            .json({
                error: false,
                errormessage: "",
                token: token_signed
            });
    }
);


app.post("/utente", auth, (req, res, next) => {
    if (req.user.ruolo == "Cassiere") {
        var u = user.newUser(req.body);

        if (!(["Cameriere", "Pizzaiolo", "Barista", "Cassiere"].includes(req.body.ruolo))) {
            return next({
                statusCode: 404,
                error: true,
                errormessage: "Ruolo non conforme"
            });
        }

        if (!req.body.password) {
            return next({
                statusCode: 404,
                error: true,
                errormessage: "Password field missing"
            });
        }
        u.setPassword(req.body.password);

        u.save()
            .then(data => {
                ios.emit('broadcast', {
                    "ruolo": ["Cassiere"],
                    "PaginaCassiere": ["gestione_utenti"]
                });
                console.log('POST'.red, ' /crea_utente'.white);
                console.log('Body della richiesta:'.blue)
                console.log(req.body);
                console.log('Richiesta eseguita da: '.yellow, req.user.cognome + " " + req.user.nome + ", " + req.user.ruolo);
                return res
                    .status(200)
                    .json({
                        error: false,
                        errormessage: "",
                        id: data._id
                    });
            })
            .catch(reason => {
                if (reason.code === 11000)
                    return next({
                        statusCode: 404,
                        error: true,
                        errormessage: "User already exists"
                    });

                return next({
                    statusCode: 404,
                    error: true,
                    errormessage: "DB error: " + reason.errmsg
                });
            });
    } else
        return next({
            statusCode: 404,
            error: true,
            errormessage: "you do not have the necessary privileges to access this API"
        });
});


app.delete("/utente/:id", auth, (req, res, next) => {
    if (req.user.ruolo == "Cassiere") {
        user
            .getModel()
            .deleteOne({
                _id: req.params.id
            })
            .then(data => {
                ios.emit('broadcast', {
                    "ruolo": ["Cassiere"],
                    "PaginaCassiere": ["gestione_utenti"]
                });
                console.log('DELETE'.red, ' /elimina_utente/'.white + req.params.id);
                console.log('Richiesta eseguita da: '.yellow, req.user.cognome + " " + req.user.nome + ", " + req.user.ruolo);
                return res.status(200).json(data);
            })
            .catch(reason => {
                return next({
                    statusCode: 404,
                    error: true,
                    errormessage: "DB error: " + reason
                });
            });
    } else
        return next({
            statusCode: 404,
            error: true,
            errormessage: "you do not have the necessary privileges to access this API"
        });
});

app.post("/crea_ordine", auth, (req, res, next) => {
    if (req.user.ruolo == "Cameriere") {
        var esiste_tavolo_abbastanza_capiente;
        var tavolo_occupato = 0;
        ordini
            .getModel()
            .find({
                tavolo: req.body.tavolo,
                ordine_pagato: false
            })
            .count()
            .then(data => {
                tavolo_occupato = data;
            })
            .catch(reason => {
                return next({
                    statusCode: 404,
                    error: true,
                    errormessage: "DB error: " + reason
                });
            })
            .then(() => {
                if (tavolo_occupato == 1) {

                    return res
                        .status(200)
                        .json({
                            error: true,
                            errormessage: "tavolo occupato"
                        });
                } else {

                    tavoli
                        .getModel()
                        .find({
                            numero: req.body.tavolo,
                            posti: {
                                $gte: req.body.persone_da_servire
                            }
                        })
                        .count()
                        .then(data => {
                            esiste_tavolo_abbastanza_capiente = data;
                        })
                        .catch(reason => {
                            return next({
                                statusCode: 404,
                                error: true,
                                errormessage: "DB error: " + reason
                            });
                        })
                        .then(() => {
                            console.log('POST'.red, ' /crea_ordine'.white);
                            console.log('Body della richiesta:'.blue)
                            console.log(req.body);
                            console.log('Richiesta eseguita da: '.yellow, req.user.cognome + " " + req.user.nome + ", " + req.user.ruolo);

                            if (esiste_tavolo_abbastanza_capiente == 1) {
                                req.body.ordine_completato = false;
                                req.body.stato_bibite = 0;
                                req.body.stato_pizze = 0;
                                req.body.ordine_pagato = false;
                                req.body.cameriere = req.user.username;
                                req.body.ora_ordine = new Date();
                                ordini
                                    .getModel()
                                    .create(req.body)
                                    .then(data => {

                                        ios.emit('broadcast', {
                                            "ruolo": ["Cassiere"],
                                            "PaginaCassiere": ["cassiere"]
                                        });
                                        return res
                                            .status(200)
                                            .json({
                                                error: false,
                                                errormessage: "",
                                                id: data._id
                                            });
                                    })
                                    .catch(reason => {
                                        return next({
                                            statusCode: 404,
                                            error: true,
                                            errormessage: "DB error: " + reason
                                        });
                                    });
                            } else {
                                return res
                                    .status(200)
                                    .json({
                                        error: true,
                                        errormessage: "tavolo non abbastanza capiente"
                                    });
                            }
                        });
                }
            });
    } else
        return next({
            statusCode: 404,
            error: true,
            errormessage: "you do not have the necessary privileges to access this API"
        });
});


app.post("/aggiungi_prodotto/:id_ordine", auth, (req, res, next) => {
    if (req.user.ruolo == "Cameriere") {
        console.log('POST'.red, ' /aggiungi_prodotto/'.white + req.params.id_ordine);
        console.log('Body della richiesta:'.blue)
        console.log(req.body);
        console.log('Richiesta eseguita da: '.yellow, req.user.cognome + " " + req.user.nome + ", " + req.user.ruolo);
        var prodotto_esiste = false;
        var i = 0;
        var j = 0;
        var prezzo = 0;
        var non_presente = false;
        var aggiunte_aggiunte = 0;
        aggiunte
            .getModel()
            .find()
            .sort({
                nome: 1
            })
            .then(documents => {
                for (j = 0; j < req.body.aggiunte.length; j++) {
                    for (i = 0; i < documents.length; i++) {
                        if (documents[i].nome == req.body.aggiunte[j]) {
                            prezzo = prezzo + documents[i].prezzo;
                            aggiunte_aggiunte++;
                        }
                    }
                }
                if (aggiunte_aggiunte != req.body.aggiunte.length)
                    res.status(404).json({
                        error: true,
                        errormessages: "aggiunta non disponibile"
                    });
                else {
                    pizze
                        .getModel()
                        .find()
                        .sort({
                            nome: 1
                        })
                        .then(documents => {
                            for (i = 0; i < documents.length && (!prodotto_esiste); i++) {
                                if (documents[i].nome == req.body.nome_prodotto) {
                                    prezzo += documents[i].prezzo;
                                    prodotto_esiste = true;
                                    req.body.tempo_di_preparazione = documents[i].tempo_di_preparazione;
                                }
                            }
                            if (prodotto_esiste == true) {


                                req.body.prezzo = prezzo;
                                req.body.stato_preparazione = 0;
                                req.body.pizzaiolo = "    ";
                                req.body.bibita_pizza = false;
                                req.body.ordine = req.params.id_ordine;


                                prodotti_ordinati
                                    .getModel()
                                    .create(req.body)
                                    .then(data => {
                                        return res.status(200).json({
                                            error: false,
                                            errormessage: ""
                                        });
                                    })
                                    .catch(reason => {
                                        return next({
                                            statusCode: 404,
                                            error: true,
                                            errormessage: "DB error: " + reason
                                        });
                                    });

                            } else {
                                bibite
                                    .getModel()
                                    .find()
                                    .sort({
                                        nome: 1
                                    })
                                    .then(documents => {
                                        for (i = 0; i < documents.length && (!prodotto_esiste); i++) {
                                            if (documents[i].nome == req.body.nome_prodotto) {
                                                prezzo += documents[i].prezzo;
                                                prodotto_esiste = true;
                                            }
                                        }
                                        if (prodotto_esiste == true) {
                                            req.body.prezzo = prezzo;
                                            req.body.stato_preparazione = -1;
                                            req.body.pizzaiolo = "    ";
                                            req.body.bibita_pizza = true;
                                            req.body.ordine = req.params.id_ordine;

                                            prodotti_ordinati
                                                .getModel()
                                                .create(req.body)
                                                .then(data => {

                                                    return res.status(200).json({
                                                        error: false,
                                                        errormessage: ""
                                                    });
                                                })
                                                .catch(reason => {
                                                    return next({
                                                        statusCode: 404,
                                                        error: true,
                                                        errormessage: "DB error: " + reason
                                                    });
                                                });
                                        }
                                    }).catch(reason => {
                                        return next({
                                            statusCode: 404,
                                            error: true,
                                            errormessage: "DB error: " + reason
                                        });
                                    });
                            }
                        })
                        .catch(reason => {
                            return next({
                                statusCode: 404,
                                error: true,
                                errormessage: "DB error: " + reason
                            });
                        });

                };
            })
            .catch(reason => {
                return next({
                    statusCode: 404,
                    error: true,
                    errormessage: "DB error: " + reason
                });
            });
    } else
        return next({
            statusCode: 404,
            error: true,
            errormessage: "you do not have the necessary privileges to access this API"
        });
});


app.post("/chiudi_ordine/:id_ordine", auth, (req, res, next) => {
    if (req.user.ruolo == "Cameriere") {
        var pizze_trovate = 2;
        var bibite_trovate = 3;
        prodotti_ordinati
            .getModel()
            .find({
                ordine: req.params.id_ordine
            })
            .then(data => {

                for (var i = 0;
                    (i < data.length) && !(pizze_trovate == 0 && bibite_trovate == 0); i++)
                    if (data[i].bibita_pizza == true)
                        bibite_trovate = 0;
                    else
                        pizze_trovate = 0;



                ordini
                    .getModel()
                    .updateOne({
                        _id: req.params.id_ordine
                    }, {
                        $set: {
                            ordine_completato: true,
                            stato_bibite: bibite_trovate,
                            stato_pizze: pizze_trovate
                        }
                    })
                    .then(data => {
                        ios.emit('broadcast', {
                            "ruolo": ["Pizzaiolo", "Barista", "Cassiere"],
                            "PaginaCassiere": ["cassiere"]
                        });
                        console.log('POST'.red, ' /chiudi_ordine/'.white + req.params.id_ordine);
                        console.log('Richiesta eseguita da: '.yellow, req.user.cognome + " " + req.user.nome + ", " + req.user.ruolo);
                        return res.status(200).json({
                            error: false,
                            errormessage: ""
                        });
                    })
                    .catch(reason => {
                        return next({
                            statusCode: 404,
                            error: true,
                            errormessage: "DB error: " + reason
                        });
                    });
            })
            .catch(reason => {
                return next({
                    statusCode: 404,
                    error: true,
                    errormessage: "DB error: " + reason
                });
            });
    } else
        return next({
            statusCode: 404,
            error: true,
            errormessage: "you do not have the necessary privileges to access this API"
        });
});


app.get("/prossima_ord_barista", auth, (req, res, next) => {
    if (req.user.ruolo == "Barista") {
        console.log('GET'.red, ' /prossima_ord_barista'.white + req.params.id_ordine);
        console.log('Richiesta eseguita da: '.yellow, req.user.cognome + " " + req.user.nome + ", " + req.user.ruolo);
        ordini
            .getModel()
            .find({
                ordine_completato: true,
                stato_bibite: 0
            })
            .sort({
                ora_ordine: 1
            })
            .limit(1)
            .then(data => {
                if (data[0] == undefined)
                    return res
                        .status(200)
                        .json({
                            error: true,
                            errormessage: "Nessuna bibita da preparare"
                        });
                else {
                    var ora_ordine = data[0].ora_ordine;
                    var tavolo = data[0].tavolo;
                    ordini
                        .getModel()
                        .updateOne({
                            _id: data[0]._id
                        }, {
                            $set: {
                                stato_bibite: 1
                            }
                        })
                        .then(data3 => {
                            prodotti_ordinati
                                .getModel()
                                .find({
                                    ordine: data[0]._id,
                                    bibita_pizza: true
                                })
                                .then(data2 => {
                                    var data_result = {
                                        'ora_ordine': ora_ordine,
                                        'tavolo': tavolo,
                                        'prodotti': data2
                                    };
                                    return res.status(200).json(data_result);
                                });
                        });
                }
            })
            .catch(reason => {
                return next({
                    statusCode: 404,
                    error: true,
                    errormessage: "DB error: " + reason
                });
            });
    } else
        return next({
            statusCode: 404,
            error: true,
            errormessage: "you do not have the necessary privileges to access this API"
        });
});

app.post("/abbandona_ordine_bibite/:id_ordine", auth, (req, res, next) => {
    if (req.user.ruolo == "Barista") {

        ordini
            .getModel()
            .find({
                _id: req.params.id_ordine
            })
            .then(data => {

                ordini
                    .getModel()
                    .updateOne({
                        _id: req.params.id_ordine
                    }, {
                        $set: {
                            stato_bibite: 0
                        }
                    })
                    .then(data2 => {
                        ios.emit('broadcast', {
                            "ruolo": ["Barista", "Cassiere"],
                            "PaginaCassiere": ["cassiere"]
                        });
                        console.log('POST'.red, ' /abbandona_ordine_bibite/'.white + req.params.id_ordine);
                        console.log('Richiesta eseguita da: '.yellow, req.user.cognome + " " + req.user.nome + ", " + req.user.ruolo);
                        return res.status(200).json({
                            error: false,
                            errormessage: ""
                        });
                    })
                    .catch(reason => {
                        return next({
                            statusCode: 404,
                            error: true,
                            errormessage: "DB error: " + reason
                        });
                    });
            })
            .catch(reason => {
                return next({
                    statusCode: 404,
                    error: true,
                    errormessage: "DB error: " + reason
                });
            });
    } else
        return next({
            statusCode: 404,
            error: true,
            errormessage: "you do not have the necessary privileges to access this API"
        });
});

app.post("/bibite_pronte/:id_ordine", auth, (req, res, next) => {
    if (req.user.ruolo == "Barista") {
        ordini
            .getModel()
            .find({
                _id: req.params.id_ordine
            })
            .then(data => {
                console.log(data);
                ordini
                    .getModel()
                    .updateOne({
                        _id: req.params.id_ordine
                    }, {
                        $set: {
                            stato_bibite: 2,
                            barista: req.user.username
                        }
                    })
                    .then(data2 => {
                        ios.emit('broadcast', {
                            "ruolo": ["Cameriere", "Cassiere"],
                            "Cameriere": data[0].cameriere,
                            "PaginaCassiere": ["gestione_utenti", "cassiere"]
                        });
                        console.log('POST'.red, ' /bibite_pronte/'.white + req.params.id_ordine);
                        console.log('Richiesta eseguita da: '.yellow, req.user.cognome + " " + req.user.nome + ", " + req.user.ruolo);
                        return res.status(200).json({
                            error: false,
                            errormessage: ""
                        });
                    })
                    .catch(reason => {
                        return next({
                            statusCode: 404,
                            error: true,
                            errormessage: "DB error: " + reason
                        });
                    });
            })
            .catch(reason => {
                return next({
                    statusCode: 404,
                    error: true,
                    errormessage: "DB error: " + reason
                });
            });
    } else
        return next({
            statusCode: 404,
            error: true,
            errormessage: "you do not have the necessary privileges to access this API"
        });
});


app.get("/prossima_ord_pizzaiolo", auth, (req, res, next) => {
    if (req.user.ruolo == "Pizzaiolo") {
        ordini
            .getModel()
            .find({
                ordine_completato: true,
                stato_pizze: 0
            })
            .sort({
                ora_ordine: 1
            })
            .limit(1)
            .then(data => {
                console.log('POST'.red, ' /prossima_ord_pizzaiolo'.white);
                console.log('Richiesta eseguita da: '.yellow, req.user.cognome + " " + req.user.nome + ", " + req.user.ruolo);
                if (data[0] == undefined)
                    return res
                        .status(200)
                        .json({
                            error: true,
                            errormessage: "Nessuna pizza preparare"
                        });
                else
                    var ora_ordine = data[0].ora_ordine;
                var tavolo = data[0].tavolo;
                prodotti_ordinati
                    .getModel()
                    .find({
                        ordine: data[0]._id,
                        bibita_pizza: false,
                        stato_preparazione: {
                            $lt: 2
                        }
                    })
                    .sort({
                        tempo_di_preparazione: -1
                    })
                    .then(data2 => {
                        var data_result = {
                            'ora_ordine': ora_ordine,
                            'tavolo': tavolo,
                            'prodotti': data2
                        };
                        return res.status(200).json(data_result);
                    });
            })
            .catch(reason => {
                return next({
                    statusCode: 404,
                    error: true,
                    errormessage: "DB error: " + reason
                });
            });
    } else
        return next({
            statusCode: 404,
            error: true,
            errormessage: "you do not have the necessary privileges to access this API"
        });
});


app.post("/pizza_inizio_preparazione/:id_prodotto", auth, (req, res, next) => {
    if (req.user.ruolo == "Pizzaiolo") {
        prodotti_ordinati
            .getModel()
            .updateOne({
                _id: req.params.id_prodotto
            }, {
                $set: {
                    stato_preparazione: 1,
                    pizzaiolo: req.user.username
                }
            })
            .then(data => {
                ios.emit('broadcast', {
                    "ruolo": ["Pizzaiolo", "Cassiere"],
                    "PaginaCassiere": ["cassiere", "gestione_utenti"]
                });
                console.log('POST'.red, ' /pizza_inizio_preparazione/'.white + req.params.id_prodotto);
                console.log('Richiesta eseguita da: '.yellow, req.user.cognome + " " + req.user.nome + ", " + req.user.ruolo);
                return res.status(200).json({
                    error: false,
                    errormessage: ""
                });
            })
            .catch(reason => {
                return next({
                    statusCode: 404,
                    error: true,
                    errormessage: "DB error: " + reason
                });
            });
    } else
        return next({
            statusCode: 404,
            error: true,
            errormessage: "you do not have the necessary privileges to access this API"
        });
});

app.post("/pizza_fine_preparazione/:id_prodotto", auth, (req, res, next) => {
    if (req.user.ruolo == "Pizzaiolo") {
        prodotti_ordinati
            .getModel()
            .updateOne({
                _id: req.params.id_prodotto
            }, {
                $set: {
                    stato_preparazione: 2
                }
            })
            .then(data => {
                ios.emit('broadcast', {
                    "ruolo": ["Pizzaiolo", "Cassiere"],
                    "PaginaCassiere": ["cassiere"]
                });
                console.log('POST'.red, ' /pizza_fine_preparazione/'.white + req.params.id_prodotto);
                console.log('Richiesta eseguita da: '.yellow, req.user.cognome + " " + req.user.nome + ", " + req.user.ruolo);
                return res.status(200).json({
                    error: false,
                    errormessage: ""
                });
            })
            .catch(reason => {
                return next({
                    statusCode: 404,
                    error: true,
                    errormessage: "DB error: " + reason
                });
            });
    } else
        return next({
            statusCode: 404,
            error: true,
            errormessage: "you do not have the necessary privileges to access this API"
        });
});

app.post("/pizze_pronte/:id_ordine", auth, (req, res, next) => {
    if (req.user.ruolo == "Pizzaiolo") {

        ordini
            .getModel()
            .find({
                _id: req.params.id_ordine
            })
            .then(data => {
                ordini
                    .getModel()
                    .updateOne({
                        _id: req.params.id_ordine
                    }, {
                        $set: {
                            stato_pizze: 1
                        }
                    })
                    .then(data2 => {
                        ios.emit('broadcast', {
                            "ruolo": ["Pizzaiolo", "Cameriere", "Cassiere"],
                            "Cameriere": data[0].cameriere,
                            "PaginaCassiere": ["cassiere"]
                        });
                        console.log('POST'.red, ' /pizze_pronte/'.white + req.params.id_ordine);
                        console.log('Richiesta eseguita da: '.yellow, req.user.cognome + " " + req.user.nome + ", " + req.user.ruolo);
                        return res.status(200).json({
                            error: false,
                            errormessage: ""
                        });
                    })
                    .catch(reason => {
                        return next({
                            statusCode: 404,
                            error: true,
                            errormessage: "DB error: " + reason
                        });
                    });
            })
            .catch(reason => {
                return next({
                    statusCode: 404,
                    error: true,
                    errormessage: "DB error: " + reason
                });
            });

    } else
        return next({
            statusCode: 404,
            error: true,
            errormessage: "you do not have the necessary privileges to access this API"
        });
});

app.get("/ordini_da_consegnare", auth, (req, res, next) => {
    if (req.user.ruolo == "Cameriere") {
        console.log('POST'.red, ' /ordini_da_consegnare'.white);
        console.log('Richiesta eseguita da: '.yellow, req.user.cognome + " " + req.user.nome + ", " + req.user.ruolo);
        ordini
            .getModel()
            .find({
                $or: [{
                    stato_bibite: 2
                }, {
                    stato_pizze: 1
                }],
                cameriere: req.user.username
            })
            .sort({
                ora_ordine: 1
            })
            .then(data => {
                if (data[0] == undefined)
                    return res
                        .status(200)
                        .json({
                            error: true,
                            errormessage: "Nessun prodotto da consegnare"
                        });
                else
                    return res.status(200).json(data);

            })
            .catch(reason => {
                return next({
                    statusCode: 404,
                    error: true,
                    errormessage: "DB error: " + reason
                });
            });
    } else
        return next({
            statusCode: 404,
            error: true,
            errormessage: "you do not have the necessary privileges to access this API"
        });
});


app.post("/bibite_consegnate/:id_ordine", auth, (req, res, next) => {
    if (req.user.ruolo == "Cameriere") {
        ordini
            .getModel()
            .updateOne({
                _id: req.params.id_ordine
            }, {
                $set: {
                    stato_bibite: 3
                }
            })
            .then(data => {
                ios.emit('broadcast', {
                    "ruolo": ["Cassiere"],
                    "PaginaCassiere": ["gestione_utenti", "cassiere"]
                });
                console.log('POST'.red, ' /bibite_consegnate/'.white + req.params.id_ordine);
                console.log('Richiesta eseguita da: '.yellow, req.user.cognome + " " + req.user.nome + ", " + req.user.ruolo);
                return res.status(200).json({
                    error: false,
                    errormessage: ""
                });
            })
            .catch(reason => {
                return next({
                    statusCode: 404,
                    error: true,
                    errormessage: "DB error: " + reason
                });
            });
    } else
        return next({
            statusCode: 404,
            error: true,
            errormessage: "you do not have the necessary privileges to access this API"
        });
});


app.post("/pizze_consegnate/:id_ordine", auth, (req, res, next) => {
    if (req.user.ruolo == "Cameriere") {
        ordini
            .getModel()
            .updateOne({
                _id: req.params.id_ordine
            }, {
                $set: {
                    stato_pizze: 2
                }
            })
            .then(data => {
                ios.emit('broadcast', {
                    "ruolo": ["Cassiere"],
                    "PaginaCassiere": ["gestione_utenti", "cassiere"]
                });
                console.log('POST'.red, ' /pizze_consegnate/'.white + req.params.id_ordine);
                console.log('Richiesta eseguita da: '.yellow, req.user.cognome + " " + req.user.nome + ", " + req.user.ruolo);
                return res.status(200).json({
                    error: false,
                    errormessage: ""
                });
            })
            .catch(reason => {
                return next({
                    statusCode: 404,
                    error: true,
                    errormessage: "DB error: " + reason
                });
            });
    } else
        return next({
            statusCode: 404,
            error: true,
            errormessage: "you do not have the necessary privileges to access this API"
        });
});


app.get("/tavoli_occupati", auth, (req, res, next) => {
    if (req.user.ruolo == "Cassiere") {
        ordini
            .getModel()
            .find({
                ordine_pagato: false
            }, {
                tavolo: 1,
                _id: 0
            })
            .sort({
                tavolo: 1
            })
            .then(data => {
                console.log('POST'.red, ' /tavoli_occupati'.white);
                console.log('Richiesta eseguita da: '.yellow, req.user.cognome + " " + req.user.nome + ", " + req.user.ruolo);
                return res.status(200).json(data);
            })
            .catch(reason => {
                return next({
                    statusCode: 404,
                    error: true,
                    errormessage: "DB error: " + reason
                });
            });
    } else
        return next({
            statusCode: 404,
            error: true,
            errormessage: "you do not have the necessary privileges to access this API"
        });
});

app.get("/informazioni_ordine/:numero_tavolo", auth, (req, res, next) => {
    if (req.user.ruolo == "Cassiere") {
        console.log('GET'.red, ' /informazioni_ordine/'.white + req.params.numero_tavolo);
        console.log('Richiesta eseguita da: '.yellow, req.user.cognome + " " + req.user.nome + ", " + req.user.ruolo);
        ordini
            .getModel()
            .find({
                ordine_pagato: false,
                tavolo: req.params.numero_tavolo
            }, )
            .then(data => {
                if (data[0])
                    return res.status(200).json(data[0]);
                else
                    return res
                        .status(200)
                        .json({
                            error: true,
                            errormessage: "Tavolo libero"
                        });

            })
            .catch(reason => {
                return next({
                    statusCode: 404,
                    error: true,
                    errormessage: "DB error: " + reason
                });
            });
    } else
        return next({
            statusCode: 404,
            error: true,
            errormessage: "you do not have the necessary privileges to access this API"
        });
});

app.get("/informazioni_prodotti/:id_ordine", auth, (req, res, next) => {
    if (req.user.ruolo == "Cassiere") {
        prodotti_ordinati
            .getModel()
            .find({
                ordine: req.params.id_ordine
            })
            .then(data => {
                console.log('POST'.red, ' /informazioni_prodotti/'.white + req.params.id_ordine);
                console.log('Richiesta eseguita da: '.yellow, req.user.cognome + " " + req.user.nome + ", " + req.user.ruolo);
                return res.status(200).json(data);
            })
            .catch(reason => {
                return next({
                    statusCode: 404,
                    error: true,
                    errormessage: "DB error: " + reason
                });
            });
    } else
        return next({
            statusCode: 404,
            error: true,
            errormessage: "you do not have the necessary privileges to access this API"
        });
});


app.get("/calcolo_totale/:numero_tavolo", auth, (req, res, next) => {
    if (req.user.ruolo == "Cassiere") {
        ordini
            .getModel()
            .findOne({
                tavolo: req.params.numero_tavolo,
                ordine_pagato: false
            })
            .then(data => {
                if (data) {
                    var appo = (data._id).toString(); //aggiunto sennò dava errore

                    prodotti_ordinati
                        .getModel()
                        .aggregate([{
                                $match: {
                                    ordine: appo
                                }
                            }, //c'era (data._id).toString(); ma dà errore ts
                            {
                                $group: {
                                    _id: null,
                                    total: {
                                        $sum: "$prezzo"
                                    }
                                }
                            }
                        ])
                        .then(data2 => {
                            console.log('POST'.red, ' /calcolo_totale/'.white + req.params.numero_tavolo);
                            console.log('Richiesta eseguita da: '.yellow, req.user.cognome + " " + req.user.nome + ", " + req.user.ruolo);
                            return res.status(200).json(data2);
                        })
                        .catch(reason => {
                            return next({
                                statusCode: 404,
                                error: true,
                                errormessage: "DB error: " + reason
                            });
                        });
                } else
                    return next({
                        statusCode: 404,
                        error: true,
                        errormessage: "Total is not available!"
                    });

            })
            .catch(reason => {
                return next({
                    statusCode: 404,
                    error: true,
                    errormessage: "DB error: " + reason
                });
            });
    } else
        return next({
            statusCode: 404,
            error: true,
            errormessage: "you do not have the necessary privileges to access this API"
        });
});


app.post("/pagamento_ordine/:numero_tavolo", auth, (req, res, next) => {
    if (req.user.ruolo == "Cassiere") {
        ordini
            .getModel()
            .updateOne({
                tavolo: req.params.numero_tavolo,
                ordine_pagato: false
            }, {
                $set: {
                    ordine_pagato: true,
                    cassiere: req.user.username
                }
            })
            .then((data) => {
                console.log(data.nModified);
                if (data.nModified == 1) {
                    ios.emit('broadcast', {
                        "ruolo": ["Cameriere", "Cassiere"],
                        "PaginaCassiere": ["incasso", "gestione_utenti", "cassiere"]
                    });
                    console.log('POST'.red, ' /pagamento_ordine/'.white + req.params.numero_tavolo);
                    console.log('Richiesta eseguita da: '.yellow, req.user.cognome + " " + req.user.nome + ", " + req.user.ruolo);
                    return res.status(200).json({
                        error: false,
                        errorMessage: ""
                    });
                } else
                    return res.status(404).json({
                        error: true,
                        errorMessage: "nessun ordine pendente per il tavolo specificato"
                    });
            })
            .catch(reason => {
                return next({
                    statusCode: 404,
                    error: true,
                    errormessage: "DB error: " + reason
                });
            });

    } else
        return next({
            statusCode: 404,
            error: true,
            errormessage: "you do not have the necessary privileges to access this API"
        });

});


app.get("/incasso_giorno", auth, (req, res, next) => {
    if (req.user.ruolo == "Cassiere") {
        var d = new Date();
        var month = '' + (d.getMonth() + 1);
        var day = '' + d.getDate();
        var year = '' + d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        ordini
            .getModel()
            .find({
                ora_ordine: {
                    "$gte": new Date(year + "-" + month + "-" + day + "T00:00:00.000Z")
                },
                ordine_pagato: true
            }, {
                _id: 1
            })
            .then((data) => {
                var arrayu = [];
                for (var i = 0; i < data.length; i++)
                    arrayu.push(data[i]._id.toString());


                prodotti_ordinati
                    .getModel()
                    .find({
                        ordine: {
                            $in: arrayu
                        }
                    })
                    .then((data2) => {
                        var totale = 0;
                        for (var scorri = 0; scorri < data2.length; scorri++)
                            totale = totale + data2[scorri].prezzo;
                        console.log('POST'.red, ' /incasso_giorno'.white);
                        console.log('Richiesta eseguita da: '.yellow, req.user.cognome + " " + req.user.nome + ", " + req.user.ruolo);
                        res.status(200).json({
                            risultato: totale
                        });
                    });
            });

    } else
        return next({
            statusCode: 404,
            error: true,
            errormessage: "you do not have the necessary privileges to access this API"
        });
});

app.get("/incasso_settimana", auth, (req, res, next) => {
    if (req.user.ruolo == "Cassiere") {
        var d = new Date();
        var data_indietro = d.getDate() - 7;
        d.setDate(data_indietro);
        var month = '' + (d.getMonth() + 1);
        var day = '' + d.getDate();
        var year = '' + d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        ordini
            .getModel()
            .find({
                ora_ordine: {
                    "$gte": new Date(year + "-" + month + "-" + day + "T00:00:00.000Z")
                },
                ordine_pagato: true
            }, {
                _id: 1
            })
            .then((data) => {
                var arrayu = [];
                for (var i = 0; i < data.length; i++)
                    arrayu.push(data[i]._id.toString());


                prodotti_ordinati
                    .getModel()
                    .find({
                        ordine: {
                            $in: arrayu
                        }
                    })
                    .then((data2) => {
                        var totale = 0;
                        for (var scorri = 0; scorri < data2.length; scorri++)
                            totale = totale + data2[scorri].prezzo;
                        console.log('POST'.red, ' /incasso_settimana'.white);
                        console.log('Richiesta eseguita da: '.yellow, req.user.cognome + " " + req.user.nome + ", " + req.user.ruolo);
                        res.status(200).json({
                            risultato: totale
                        });
                    });
            });

    } else
        return next({
            statusCode: 404,
            error: true,
            errormessage: "you do not have the necessary privileges to access this API"
        });
});


app.get("/incasso_mese", auth, (req, res, next) => {
    if (req.user.ruolo == "Cassiere") {
        var d = new Date();
        var data_indietro = d.getDate() - 30;
        d.setDate(data_indietro);
        var month = '' + (d.getMonth() + 1);
        var day = '' + d.getDate();
        var year = '' + d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        ordini
            .getModel()
            .find({
                ora_ordine: {
                    "$gte": new Date(year + "-" + month + "-" + day + "T00:00:00.000Z")
                },
                ordine_pagato: true
            }, {
                _id: 1
            })
            .then((data) => {
                var arrayu = [];
                for (var i = 0; i < data.length; i++)
                    arrayu.push(data[i]._id.toString());


                prodotti_ordinati
                    .getModel()
                    .find({
                        ordine: {
                            $in: arrayu
                        }
                    })
                    .then((data2) => {
                        var totale = 0;
                        for (var scorri = 0; scorri < data2.length; scorri++)
                            totale = totale + data2[scorri].prezzo;
                        console.log('POST'.red, ' /incasso_mese'.white);
                        console.log('Richiesta eseguita da: '.yellow, req.user.cognome + " " + req.user.nome + ", " + req.user.ruolo);
                        res.status(200).json({
                            risultato: totale
                        });
                    });
            });

    } else
        return next({
            statusCode: 404,
            error: true,
            errormessage: "you do not have the necessary privileges to access this API"
        });
});




app.get("/statistiche_dipendente/:id", auth, (req, res, next) => {
    if (req.user.ruolo == "Cassiere") {
        var result = {};
        console.log('POST'.red, ' /statistiche_dipendente/'.white + req.params.id);
        console.log('Richiesta eseguita da: '.yellow, req.user.cognome + " " + req.user.nome + ", " + req.user.ruolo);
        user
            .getModel()
            .findOne({
                _id: req.params.id
            }, {
                digest: 0,
                salt: 0
            })
            .then(data1 => {

                if (data1.ruolo == "Cameriere") {


                    ordini
                        .getModel()
                        .aggregate([{
                                $match: {
                                    cameriere: data1.username,
                                    stato_bibite: 3,
                                    stato_pizze: 2
                                }
                            },
                            {
                                $group: {
                                    _id: null,
                                    persone_servite: {
                                        $sum: "$persone_da_servire"
                                    }
                                }
                            }
                        ])
                        .then(data => {

                            if (data[0] == undefined) {
                                result.persone_servite = 0;
                                result.singoli_prodotti_ordinati_consengati = 0;
                                result.tavoli_serviti = 0;
                                return res.status(200).json({
                                    error: false,
                                    errorMessage: "",
                                    risultato: result
                                });
                            }

                            result.persone_servite = data[0].persone_servite;

                            ordini
                                .getModel()
                                .find({
                                    cameriere: data1.username,
                                    stato_bibite: 3,
                                    stato_pizze: 2
                                })
                                .count()
                                .then(data => {

                                    result.singoli_prodotti_ordinati_consengati = 0;
                                    result.tavoli_serviti = data;

                                    ordini
                                        .getModel()
                                        .find({
                                            stato_bibite: 3,
                                            stato_pizze: 2,
                                            cameriere: data1.username
                                        })
                                        .then(data => {
                                            var arrayu = [];
                                            for (var i = 0; i < data.length; i++)
                                                arrayu.push(data[i]._id.toString());


                                            prodotti_ordinati
                                                .getModel()
                                                .find({
                                                    ordine: {
                                                        $in: arrayu
                                                    }
                                                })
                                                .count()
                                                .then(data => {
                                                    result.singoli_prodotti_ordinati_consengati = data;
                                                    return res.status(200).json({
                                                        error: false,
                                                        errorMessage: "",
                                                        risultato: result
                                                    });

                                                });

                                        }).catch(reason => {
                                            return next({
                                                statusCode: 404,
                                                error: true,
                                                errormessage: "DB error: " + reason
                                            });
                                        });
                                })
                                .catch(reason => {
                                    return next({
                                        statusCode: 404,
                                        error: true,
                                        errormessage: "DB error: " + reason
                                    });
                                });
                        })
                        .catch(reason => {
                            return next({
                                statusCode: 404,
                                error: true,
                                errormessage: "DB error: " + reason
                            });
                        });
                } else if (data1.ruolo == "Barista") {


                    ordini
                        .getModel()
                        .aggregate([{
                                $match: {
                                    barista: data1.username,
                                    stato_bibite: {
                                        $gte: 2
                                    }
                                }
                            },
                            {
                                $group: {
                                    _id: null,
                                    persone_servite: {
                                        $sum: "$persone_da_servire"
                                    }
                                }
                            }
                        ])
                        .then(data => {

                            if (data[0] == undefined) {
                                result.persone_a_cui_e_stato_preparato_da_bere = 0;
                                result.singoli_prodotti_preparati = 0;
                                result.tavoli_a_cui_e_stato_preparato_da_bere = 0;
                                return res.status(200).json({
                                    error: false,
                                    errorMessage: "",
                                    risultato: result
                                });
                            }

                            result.persone_a_cui_e_stato_preparato_da_bere = data[0].persone_servite;

                            ordini
                                .getModel()
                                .find({
                                    barista: data1.username,
                                    stato_bibite: {
                                        $gte: 2
                                    }
                                })
                                .count()
                                .then(data => {

                                    result.singoli_prodotti_preparati = 0;
                                    result.tavoli_a_cui_e_stato_preparato_da_bere = data;

                                    ordini
                                        .getModel()
                                        .find({
                                            stato_bibite: {
                                                $gte: 2
                                            },
                                            barista: data1.username
                                        })
                                        .then(data => {
                                            var arrayu = [];
                                            for (var i = 0; i < data.length; i++)
                                                arrayu.push(data[i]._id.toString());


                                            prodotti_ordinati
                                                .getModel()
                                                .find({
                                                    ordine: {
                                                        $in: arrayu
                                                    },
                                                    bibita_pizza: true
                                                })
                                                .count()
                                                .then(data => {
                                                    result.singoli_prodotti_preparati = data;
                                                    return res.status(200).json({
                                                        error: false,
                                                        errorMessage: "",
                                                        risultato: result
                                                    });

                                                }).catch(reason => {
                                                    return next({
                                                        statusCode: 404,
                                                        error: true,
                                                        errormessage: "DB error: " + reason
                                                    });
                                                });
                                        }).catch(reason => {
                                            return next({
                                                statusCode: 404,
                                                error: true,
                                                errormessage: "DB error: " + reason
                                            });
                                        });
                                })
                                .catch(reason => {
                                    return next({
                                        statusCode: 404,
                                        error: true,
                                        errormessage: "DB error: " + reason
                                    });
                                });
                        })
                        .catch(reason => {
                            return next({
                                statusCode: 404,
                                error: true,
                                errormessage: "DB error: " + reason
                            });
                        });
                } else if (data1.ruolo == "Pizzaiolo") {
                    prodotti_ordinati
                        .getModel()
                        .find({
                            pizzaiolo: data1.username
                        })
                        .count()
                        .then(data => {
                            result.pizze_preparate = data;
                            return res.status(200).json({
                                error: false,
                                errorMessage: "",
                                risultato: result
                            });

                        }).catch(reason => {
                            return next({
                                statusCode: 404,
                                error: true,
                                errormessage: "DB error: " + reason
                            });
                        });
                } else if (data1.ruolo == "Cassiere") {
                    ordini
                        .getModel()
                        .find({
                            cassiere: data1.username,
                            ordine_pagato: true
                        })
                        .count()
                        .then(data => {
                            result.tavoli_pagati = data;
                            return res.status(200).json({
                                error: false,
                                errorMessage: "",
                                risultato: result
                            });

                        }).catch(reason => {
                            return next({
                                statusCode: 404,
                                error: true,
                                errormessage: "DB error: " + reason
                            });
                        });
                }
            })
            .catch(reason => {
                return next({
                    statusCode: 404,
                    error: true,
                    errormessage: "DB error: " + reason
                });
            });
    } else
        return next({
            statusCode: 404,
            error: true,
            errormessage: "you do not have the necessary privileges to access this API"
        });
});


// Add error handling middleware
app.use(function(err, req, res, next) {
    console.log("Request error: ".red + JSON.stringify(err));
    res.status(err.statusCode || 500).json(err);
});

// The very last middleware will report an error 404
// (will be eventually reached if no error occurred and if
//  the requested endpoint is not matched by any route)
//
app.use((req, res, next) => {
    res.status(404).json({
        statusCode: 404,
        error: true,
        errormessage: "Invalid endpoint"
    });
});

// Connect to mongodb and launch the HTTP server trough Express
//
mongoose.connect("mongodb://localhost:27017/ristorante").then(
    function onconnected() {
        console.log("Connesso a MongoDb");

        var u = user.newUser({
            username: "capo",
            cognome: "Rossi",
            nome: "Mario",
            ruolo: "Cassiere"
        });
        u.setPassword("capo");
        u.save()
            .then(() => {
                console.log("Cassiere creato");

                var v = user.newUser({
                    username: "cameriere"
                    cognome: "Verdi"
                    nome: "Mario"
                    ruolo: "Cameriere"
                });
                v.setPassword("capo");
                v.save().then(() => {
                    console.log("Cameriere creato");

                    var w = user.newUser({
                        username: "barista"
                        cognome: "martignon"
                        nome: "Mario"
                        ruolo: "Barista"
                    });
                    w.setPassword("capo");
                    w.save().then(() => {
                        console.log("Barista creato");

                        var x = user.newUser({
                            username: "pizzaiolo"
                            cognome: "Visentin"
                            nome: "Mario"
                            ruolo: "Pizzaiolo"
                        });
                        x.setPassword("capo");
                        x.save().then(() => {
                            console.log("Pizzaiolo creato");

                            pizze //da vedere con thomas questa parte
                                .getModel()
                                .count({})
                                .then(count => {
                                    if (count == 0) {
                                        console.log(
                                            "Sto aggiungendo alcuni prodotti al database"
                                        );
                                        var margherita = pizze
                                            .getModel()
                                            .create({
                                                nome: "Margherita",
                                                prezzo: 4.0,
                                                descrizione: "Mozzarella, pomodoro",
                                                tempo_di_preparazione: 4
                                            });
                                        var capricciosa = pizze
                                            .getModel()
                                            .create({
                                                nome: "Capricciosa",
                                                prezzo: 6.0,
                                                descrizione: "Mozzarella, pomodoro, prosciutto, funghi, carciofi",
                                                tempo_di_preparazione: 6
                                            });
                                        var diavola = pizze.getModel().create({
                                            nome: "Diavola",
                                            prezzo: 6.0,
                                            descrizione: "Mozzarella, pomodoro, salamino piccante",
                                            tempo_di_preparazione: 5
                                        });
                                        var cocacola = bibite
                                            .getModel()
                                            .create({
                                                nome: "CocaCola",
                                                prezzo: 2.8,
                                                descrizione: "Bibita zuccherata analcolica"
                                            });

                                        var aranciata = bibite
                                            .getModel()
                                            .create({
                                                nome: "Aranciata",
                                                prezzo: 2.8,
                                                descrizione: "Bibita zuccherata analcolica"
                                            });

                                        var birra_piccola = bibite
                                            .getModel()
                                            .create({
                                                nome: "Birra piccola",
                                                prezzo: 3,
                                                descrizione: "Birra heineken 5°"
                                            });


                                        var agg_bufala = aggiunte
                                            .getModel()
                                            .create({
                                                nome: "Mozzarella di bufala",
                                                prezzo: 1.5,
                                                descrizione: "Mozzarella di bufala I.G.P.",
                                                pizza_bibita: true
                                            });
                                        var agg_ghiaccio = aggiunte
                                            .getModel()
                                            .create({
                                                nome: "Ghiaccio",
                                                prezzo: 0,
                                                descrizione: "Ghiaccio su bibita",
                                                pizza_bibita: false
                                            });
                                        var agg_limone = aggiunte
                                            .getModel()
                                            .create({
                                                nome: "Limone",
                                                prezzo: 0,
                                                descrizione: "Limone su bibita",
                                                pizza_bibita: false
                                            });



                                        var tavolo1 = tavoli.getModel().create({
                                            numero: 1,
                                            posti: 8
                                        });
                                        var tavolo2 = tavoli.getModel().create({
                                            numero: 2,
                                            posti: 6
                                        });
                                        var tavolo3 = tavoli.getModel().create({
                                            numero: 3,
                                            posti: 4
                                        });
                                        var tavolo4 = tavoli.getModel().create({
                                            numero: 4,
                                            posti: 12
                                        });
                                        var tavolo5 = tavoli.getModel().create({
                                            numero: 5,
                                            posti: 18
                                        });
                                        var tavolo6 = tavoli.getModel().create({
                                            numero: 6,
                                            posti: 8
                                        });

                                        Promise.all([
                                                margherita,
                                                capricciosa,
                                                diavola,
                                                cocacola,
                                                aranciata,
                                                birra_piccola,
                                                agg_ghiaccio,
                                                agg_limone,
                                                agg_bufala,
                                                tavolo1,
                                                tavolo2,
                                                tavolo3,
                                                tavolo4,
                                                tavolo5,
                                                tavolo6
                                            ])
                                            .then(function() {
                                                console.log("Database pronto");
                                            })
                                            .catch(function(reason) {
                                                console.log(
                                                    "Unable to save: " + reason
                                                );
                                            });
                                    }
                                });
                        });
                    });
                });
            })
            .catch(err => {
                console.log("Unable to create admin user: " + err);
            });

        // To start a standard HTTP server we directly invoke the "listen"
        // method of express application
        let server = http.createServer(app);
        ios = io(server);
        ios.on("connection", function(client) {});
        server.listen(80, () => console.log("Server HTTP in ascolto sulla porta 80"));

        // To start an HTTPS server we create an https.Server instance
        // passing the express application middleware. Then, we start listening
        // on port 8443
        //
        /*
        https.createServer({
          key: fs.readFileSync('keys/key.pem'),
          cert: fs.readFileSync('keys/cert.pem')
        }, app).listen(8443);
        */
    },
    function onrejected() {
        console.log("Unable to connect to MongoDB");
        process.exit(-2);
    }
);