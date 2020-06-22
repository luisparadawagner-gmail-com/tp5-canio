import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../clases/Persona';

@Component({
  selector: 'app-consultar-persona',
  templateUrl: './consultar-persona.component.html',
  styleUrls: ['./consultar-persona.component.css']
})
export class ConsultarPersonaComponent implements OnInit {

  constructor(private router: Router) {}


  datos: User[] = [
    { nombre: 'House of Furies', apellido: 'VYRA', edad:8, direccion:'bla 87' }
  ];

  dataSource = this.datos;
  displayedColumns: string [] = [ 'nombre' , 'apellido' , 'edad' , 'direccion', 'modificar'];    

  
  goToCrear(user) {		
    this.router.navigate(["/crear-persona", user]);

  }

  ngOnInit() {
   
  }

}
