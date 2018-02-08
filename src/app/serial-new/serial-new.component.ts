import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SerialService } from '../shared/serial.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serial-new',
  templateUrl: './serial-new.component.html',
  styleUrls: ['./serial-new.component.css'],
  providers:[SerialService]
})
export class SerialNewComponent implements OnInit {
 id: any;
 title;
 year;
 genre;
 image;
 description;
 constructor(private serialService: SerialService, private router: Router, private route: ActivatedRoute) { }

 ngOnInit() {
   //this.resetForm();
 }
 /*
 onSubmit(form: NgForm){
   this.serialService.insertSerial(form.value);
   this.resetForm(form);
 }
 resetForm(form?: NgForm){
   if(form != null)
     form.reset();
   this.serialService.selectedSerial = {
     $key: '',
     title: '',
     year: 0,
     genre: '',
     image: [''],
     description: ''
   }
 }
 */
 onSubmit(){
   let serial = {
     title: this.title,
     year: this.year,
     genre: this.genre,
     image: this.image,
     description: this.description
   }
   console.log('Serial- ',serial);
   this.serialService.addSerial(serial);
   this.router.navigate(['serials']);
 }
}
