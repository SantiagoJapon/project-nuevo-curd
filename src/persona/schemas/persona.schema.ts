import{Schema} from 'mongoose'

export const PersonaSchema =  new Schema({
    name : {type : String, require: true},
    desc : String,
    imageUrl : String,
    cedula : String,
});