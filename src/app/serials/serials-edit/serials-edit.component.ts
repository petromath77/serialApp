import { Component, OnInit } from '@angular/core';
import { SerialService } from '../shared/serial.service';
//import { SerialService } from '../shared/serial.service';

@Component({
  selector: 'app-serials-edit',
  templateUrl: './serials-edit.component.html',
  styleUrls: ['./serials-edit.component.css'],
  providers:[SerialService]
})
export class SerialsEditComponent implements OnInit {

  constructor(private serialService: SerialService) { }

  ngOnInit() {
  }

}
