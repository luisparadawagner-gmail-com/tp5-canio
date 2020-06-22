import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators, FormArray } from '@angular/forms';
import { User } from './../clases/Persona';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {

  constructor(private fb: FormBuilder){}

  persona : User;

  showPersona : boolean = true;
  showConsultar : boolean = false;
    
  ngOnInit(): void {
    
  }
  
  nombreControl = new FormControl('User');

     
    personaForm = this.fb.group({
        nombre : ['', Validators.required],
        apellido : ['', Validators.required],
        edad : [''],
        direccion : ['']
    });

    submit(){
      debugger;
      this.personaForm.value;
      this.persona = this.personaForm.value;

      this.showConsultar = true;
      this.showPersona = false;
      
    }

}
