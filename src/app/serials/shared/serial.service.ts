import { Injectable } from '@angular/core';
import { Serial } from './serial.model';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable()
export class SerialService {
  selectedSerial: Serial = new Serial();
  serialList: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) {
    this.serialList = this.firebase.list('serials');
   }

  getData(){
    return this.serialList;
  }
  getSerial(index: number){
    return this.selectedSerial[index];
}
  insertSerial(serial: Serial){
    this.serialList.push({
      title: serial.title,
      year: serial.year,
      genre: serial.genre,
      image: serial.image,
      description: serial.description
    });
  }
}    