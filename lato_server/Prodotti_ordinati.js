"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
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
    nome_prodotto: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    aggiunte: {
        type: [mongoose.SchemaTypes.String],
        required: false
    },
    prezzo: {
        type: mongoose.SchemaTypes.Number,
        required: true
    },
    pizzaiolo: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    bibita_pizza: {
        type: mongoose.SchemaTypes.Boolean,
        required: true
    },
    ordine: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    stato_preparazione: {
        type: mongoose.SchemaTypes.Number,
        required: true
    },
    tempo_di_preparazione: {
        type: mongoose.SchemaTypes.Number,
        required: false
    }
});
function getSchema() { return messageSchema; }
exports.getSchema = getSchema;
// Mongoose Model
var messageModel; // This is not exposed outside the model
function getModel() {
    if (!messageModel) {
        messageModel = mongoose.model('Prodotti_ordinati', getSchema(), 'prodotti_ordinati');
    }
    return messageModel;
}
exports.getModel = getModel;
