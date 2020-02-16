import mongoose = require('mongoose');
import {
    Prodotti_ordinati
} from './Prodotti_ordinati';
import * as prodotti_ordinati from './Prodotti_ordinati';


// A message has some text content, a list of tags and a timestamp
//
export interface Ordini {
        tavolo: number,
        persone_da_servire: number,
        ordine_completato: boolean,
        stato_bibite: number,
        stato_pizze: number,
        ordine_pagato: boolean,
        ora_ordine: Date,
        cameriere: string,
        barista: string,
        cassiere: string
}

// User defined type guard
// Type checking cannot be performed during the execution (we don't have the Message interface anyway)
// but we can create a function to check if the supplied parameter is compatible with a given type
//
// A better approach is to use JSON schema
//


// We use Mongoose to perform the ODM between our application and
// mongodb. To do that we need to create a Schema and an associated
// data model that will be mapped into a mongodb collection
//
// Type checking cannot be enforced at runtime so we must take care
// of correctly matching the Message interface with the messageSchema 
//
// Mongoose Schema
var messageSchema = new mongoose.Schema({
    tavolo: {
        type: mongoose.SchemaTypes.Number,
        required: true
    },
    persone_da_servire: {
        type: mongoose.SchemaTypes.Number,
        required: true
    },
    ordine_completato: {
        type: mongoose.SchemaTypes.Boolean,
        required: true
    },
    stato_pizze: {
        type: mongoose.SchemaTypes.Number,
        required: true
    },
    stato_bibite: {
        type: mongoose.SchemaTypes.Number,
        required: true
    },
    ordine_pagato: {
        type: mongoose.SchemaTypes.Boolean,
        required: true
    },
    ora_ordine: {
        type: mongoose.SchemaTypes.Date,
        required: true
    },
    cameriere: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    barista: {
        type: mongoose.SchemaTypes.String,
        required: false
    },
    cassiere: {
        type: mongoose.SchemaTypes.String,
        required: false
    }
})



export function getSchema() {
    return messageSchema;
}

// Mongoose Model
var messageModel; // This is not exposed outside the model
export function getModel(): mongoose.Model < mongoose.Document > { // Return Model as singleton
    if (!messageModel) {
        messageModel = mongoose.model('Ordini', getSchema(), 'ordini')
    }
    return messageModel;
}