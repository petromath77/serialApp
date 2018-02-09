import { Injectable } from '@angular/core';
import { Serial } from './serial.model';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SerialService {
  selectedSerial: Serial = new Serial();
  serialList: AngularFireList<any>;
  serials: Observable<any[]>;
  serialDetails: Observable<any>;
  constructor(private firebase: AngularFireDatabase) {
    this.serialList = this.firebase.list('serials');
   }
  getData(){
    return this.serialList;
  }
  addSerial(serialDetails){
    var filteredSerial = JSON.parse(JSON.stringify(serialDetails));
    return this.serialList.push(filteredSerial);
  }

  getSerialDetails(id){
    this.serialDetails = this.firebase.object('/serials/'+id).valueChanges();
    return this.serialDetails;
  }
  updateSerial(id, serialDetails){
    var filteredSerial = JSON.parse(JSON.stringify(serialDetails));
    return this.serialList.update(id, filteredSerial);
  }
  deleteSerial(id){
    return this.serialList.remove(id);
  }
}    