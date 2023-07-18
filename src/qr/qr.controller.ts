import { Controller, Get } from '@nestjs/common';
import { QrService } from './qr.service';

@Controller('qr')
export class QrController {
  constructor(private readonly qrService: QrService) {}

  @Get('/')
  async generateQr() {
    const qrCodes = await this.qrService.generateQr("String");
    return qrCodes;
  }
}
