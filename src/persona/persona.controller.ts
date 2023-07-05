import { Controller, Get, Post, Delete, Res, HttpStatus, Body } from '@nestjs/common';

import { CreatePersonaDTO } from './dto/persona.dto';

@Controller('persona')
export class PersonaController {

    @Post('/create')
    cratePost(@Res() res, @Body() createPersonaDTO: CreatePersonaDTO){
        console.log(createPersonaDTO);
        return res.status(HttpStatus.OK).json({
            message : 'recibed'
        });
    }
}
