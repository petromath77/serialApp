import { Injectable } from '@angular/core';
import { Serial } from './serial.model';

@Injectable()
export class SerialService {
  selectedSerial: Serial = new Serial();

  constructor() { }

}    