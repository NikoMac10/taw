
import mongoose = require('mongoose');


// A message has some text content, a list of tags and a timestamp
//
export interface Bibite {
    nome: string,
    prezzo: number,
    descrizione: string
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
var messageSchema = new mongoose.Schema( {
    nome: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    prezzo:  {
        type: mongoose.SchemaTypes.Number,
        required: true 
    },
    descrizione: {
        type: mongoose.SchemaTypes.String,
        required: true
    }
})
export function getSchema() { return messageSchema; }

// Mongoose Model
var messageModel;  // This is not exposed outside the model
export function getModel() : mongoose.Model< mongoose.Document > { // Return Model as singleton
    if( !messageModel ) {
        messageModel = mongoose.model('Listino_bibite', getSchema(), 'listino_bibite')
    }
    return messageModel;
}