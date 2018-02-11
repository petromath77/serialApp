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
  id: any;
  title;
  year;
  genre;
  image;
  description;
  link;
  constructor(private serialService: SerialService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.serialService.getSerialDetails(this.id).subscribe(
      serial =>{
        this.title = serial.title;
        this.year = serial.year;
        this.genre = serial.genre;
        this.image = serial.image;
        this.description = serial.description;
        this.link = serial.link;
      }
    );
    
  }

}
