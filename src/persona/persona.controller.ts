import { Controller, Get, Post, Delete, Res, HttpStatus } from '@nestjs/common';

@Controller('persona')
export class PersonaController {

    @Post('/create')
    cratePost(@Res() res){
        return res.status(HttpStatus.OK).json({
            message : 'recibed'
        })
    }
}
