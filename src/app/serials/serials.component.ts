import { Component, OnInit } from '@angular/core';
import { SerialService } from './shared/serial.service';
import { Serial } from './shared/serial.model';

@Component({
  selector: 'app-serials',
  templateUrl: './serials.component.html',
  styleUrls: ['./serials.component.css'],
  providers: [SerialService]
})
export class SerialsComponent implements OnInit {
  serialList: Serial[];
  constructor(private serialService: SerialService) { }

  ngOnInit() {
    var x = this.serialService.getData();
    x.snapshotChanges().subscribe(item => {
      this.serialList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.serialList.push(y as Serial);
      });
    });
  }

}
