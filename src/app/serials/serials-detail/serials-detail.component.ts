import { Component, OnInit } from '@angular/core';
import { SerialService } from '../shared/serial.service';

@Component({
  selector: 'app-serials-detail',
  templateUrl: './serials-detail.component.html',
  styleUrls: ['./serials-detail.component.css']
})
export class SerialsDetailComponent implements OnInit {

  constructor(private serialService: SerialService) { }

  ngOnInit() {
  }

}
