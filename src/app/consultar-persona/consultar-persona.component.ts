import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../clases/Persona';
import { ConsultarPService } from './../servicios/consultar-persona.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-consultar-persona',
  templateUrl: './consultar-persona.component.html',
  styleUrls: ['./consultar-persona.component.css']
})
export class ConsultarPersonaComponent implements OnInit {

    displayedColumns: string [] = [ 'nombre' , 'apellido' , 'edad' , 'direccion', 'modificar'];    
    dataSource : any[] = [];

    @ViewChild(MatTable) tabla1: MatTable<User>;

    constructor(private router: Router, private consultarPService: ConsultarPService) {}
    
    ngOnInit() {
      this.getPersonas();
    }

    editar(user) {	
      debugger;	
      this.router.navigate(["/crear-persona", user]);
    }

    getPersonas(){
      this.consultarPService.getPersonas().subscribe((personas)=>{
        debugger;
        this.dataSource = personas;
      });
    }

}
