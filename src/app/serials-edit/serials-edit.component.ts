import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SerialService } from '../shared/serial.service';

@Component({
  selector: 'app-serials-edit',
  templateUrl: './serials-edit.component.html',
  styleUrls: ['./serials-edit.component.css'],
  providers:[SerialService]
})
export class SerialsEditComponent implements OnInit {

  constructor(private serialService: SerialService) { }

  ngOnInit() {
    this.resetForm();
  }
  
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
  
}
