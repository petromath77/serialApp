import { Component, OnInit } from '@angular/core';
import { SerialService } from './shared/serial.service';

@Component({
  selector: 'app-serials',
  templateUrl: './serials.component.html',
  styleUrls: ['./serials.component.css'],
  providers: [SerialService]
})
export class SerialsComponent implements OnInit {

  constructor(private serialService: SerialService) { }

  ngOnInit() {
  }

}
