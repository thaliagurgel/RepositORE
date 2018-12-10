import { ObjectService } from './../shared/object.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private objectService: ObjectService) { }
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.objectService.form.controls;

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.objectService.form.valid) {
      if (this.objectService.form.get('$key').value == null)
        this.objectService.insertObjeto(this.objectService.form.value);
      else
        this.objectService.updateObjeto(this.objectService.form.value);
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.objectService.form.reset();
      //this is to be done for proper reset operation
      this.objectService.form.setValue({
        $key: null,
        title: '',
        creator: '',
        subject: '',
        description: '',
        publisher: '',
        contributor: '',
        date: '',
        type: '',
        format: '',
        identifier : '',
        source: '',
        language: '',
       relation: '',
        coverage: '',
        rights: ''
      });
    }
  }

}
