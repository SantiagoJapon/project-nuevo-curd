import { Injectable } from '@nestjs/common';
import * as qrcode from 'qrcode';

@Injectable()
export class QrService {
  async generateQr(value: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      qrcode.toDataURL(value, (err, url) => {
        if (err) {
          reject(err);
        } else {
          resolve(url);
        }
      });
    });
  }
}
