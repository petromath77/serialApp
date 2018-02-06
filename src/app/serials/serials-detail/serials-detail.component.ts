import { Component, OnInit } from '@angular/core';
import { SerialService } from '../shared/serial.service';
import { Serial } from '../shared/serial.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-serials-detail',
  templateUrl: './serials-detail.component.html',
  styleUrls: ['./serials-detail.component.css']
})
export class SerialsDetailComponent implements OnInit {
  serial: Serial;
  id: number;
  constructor(private serialService: SerialService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.serial = this.serialService.getSerial(this.id);
      }
    );
  }

}
