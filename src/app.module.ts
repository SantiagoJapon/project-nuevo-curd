import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaModule } from './persona/persona.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { DataController } from './data/data.controller';
import { QrModule } from './qr/qr.module';

@Module({
  imports : [
    PersonaModule, 
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/personas-pasante'), QrModule],
  controllers: [AppController, DataController],
  providers: [AppService],
})
export class AppModule {}
