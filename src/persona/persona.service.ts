import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel  } from '@nestjs/mongoose';

import { Persona } from './interfaces/persona.interface';
import { CreatePersonaDTO } from './dto/persona.dto';
import { promises } from 'dns';
@Injectable()
export class PersonaService {
    constructor(@InjectModel('Persona') private readonly personaModel : Model<Persona>){

    }
    async getPersonas(): Promise<Persona[]>{
        const personas = await this.personaModel.find();
        return personas;
    }

    async getPersona(personaID: string): Promise<Persona>{
        const persona = await this.personaModel.findById(personaID);
        return persona;
    }

    createPersona(CreatePersonaDTO : CreatePersonaDTO): Promise<Persona>{

    }

    deletePersona(){

    }

    updatePersona(){

    }
}
