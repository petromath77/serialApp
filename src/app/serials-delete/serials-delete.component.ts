import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SerialService } from '../shared/serial.service';

@Component({
  selector: 'app-serials-delete',
  templateUrl: './serials-delete.component.html',
  styleUrls: ['./serials-delete.component.css']
})
export class SerialsDeleteComponent implements OnInit {
  id: any;
  serialTitle: any;
  serialImage: any;
  constructor(private serialService: SerialService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
        this.serialService.getSerialDetails(this.id).subscribe(
          serial =>{
            this.serialTitle = serial.title;
            this.serialImage = serial.image;
          });
  }
  removeSerial(){
      this.serialService.deleteSerial(this.id);
      this.router.navigate['serials'];
  }
}
