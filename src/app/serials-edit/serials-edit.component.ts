import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SerialService } from '../shared/serial.service';


@Component({
  selector: 'app-serials-edit',
  templateUrl: './serials-edit.component.html',
  styleUrls: ['./serials-edit.component.css'],

})
export class SerialsEditComponent implements OnInit {
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
      });
  }
  submitEdit(){
    let serial = {
      title: this.title,
      year: this.year,
      genre: this.genre,
      image: this.image,
      description: this.description,
      link: this.link
    }
    this.serialService.updateSerial(this.id, serial);
    this.router.navigate(['/serials']);
  }
 
}
