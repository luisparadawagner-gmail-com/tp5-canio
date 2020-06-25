import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators, FormArray } from '@angular/forms';
import { User } from './../clases/Persona';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: ActivatedRoute){}

  persona : any;
  personaForm: FormGroup;
  param: any;


  ngOnInit(): void {
      debugger;		
      this.param = this.route.snapshot.params;
  
      if (Object.keys(this.param).length > 0) {
        this.persona = this.param;
      } 
  
      this.initForm(this.persona);
    
  }
  
  nombreControl = new FormControl('User');

  initForm(modificado : User){   
    this.personaForm = this.fb.group({
        nombre : [modificado.nombre, Validators.required],
        apellido : [modificado.apellido, Validators.required],
        edad : [modificado.edad],
        direccion : [modificado.direccion]
    });
  }

    submit(){
      debugger;

      this.personaForm.value;
      this.persona = this.personaForm.value;

    }

}
