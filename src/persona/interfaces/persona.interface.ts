import { Document } from 'mongoose';

export interface Persona extends Document{
    readonly name : string;
    readonly desc : string;
    readonly imageUrl : string;
}