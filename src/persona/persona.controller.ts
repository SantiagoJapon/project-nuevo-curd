import { Controller, Get, Post, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, Put } from '@nestjs/common';

import { CreatePersonaDTO } from './dto/persona.dto';
import { PersonaService } from './persona.service';

@Controller('persona')
export class PersonaController {

    constructor(private personaService: PersonaService){}

    @Post('/create')
    async cratePost(@Res() res, @Body() createPersonaDTO: CreatePersonaDTO){
        
        const persona = await this.personaService.createPersona(createPersonaDTO);

        console.log(createPersonaDTO);
        return res.status(HttpStatus.OK).json({
            message : 'Producto creado',
            persona
        });
    }
    @Get('/')
    async getPersonas(@Res() res){
        const persona = await this.personaService.getPersonas();
        return res.status(HttpStatus.OK).json({
            persona
        }) 
    } 
    
    @Get('/:personaID')
    async getPersona(@Res()  res, @Param('personaID') personaID){
        const persona = await this.personaService.getPersona(personaID);
        if(!persona) throw new NotFoundException('Person Does not exist');
        return res.status(HttpStatus.OK).json(persona);
    }

    @Delete('/delete')
    async deletePersona(@Res() res, @Query('personaID') personaID){
        const personaDeleted = await this.personaService.deletePersona(personaID);
        if(!personaDeleted) throw new NotFoundException('Persona no existente');
        return res.status(HttpStatus.OK).json({
            message: 'Persona eliminada correctamente',
            personaDeleted
        });
    }

    @Put('/update')
    async updatePersona(@Res() res, @Body() createPersonaDTO: CreatePersonaDTO, @Query('personaID') personaID){
        const updatePersona = await this.personaService.updatePersona(personaID, createPersonaDTO);
        if (!updatePersona) throw new NotFoundException('Persona no existente');
        return res.status(HttpStatus.OK).json({
            message : 'Persona actualizada correctamente',
            updatePersona
        });
    }
} 
