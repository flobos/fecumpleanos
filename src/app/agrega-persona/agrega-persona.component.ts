import { Component, OnInit } from '@angular/core';
import { Persona } from "../models/Persona";
import { PersonaService } from "../services/persona.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-agrega-persona',
  templateUrl: './agrega-persona.component.html',
  styleUrls: ['./agrega-persona.component.css']
})
export class AgregaPersonaComponent implements OnInit {

  persona: Persona = new Persona;
  exito: boolean = false;
  siMensaje: boolean = false;


  constructor(private personaService: PersonaService, private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
  }

  enviar(){

      this.guardarPersona()
  }


  limpia(){
    this.exito = false;
    this.siMensaje = false;
    this.persona.nombre = null;
    this.persona.apellido = null;
    this.persona.fechaNacimiento = null;
    this.persona.edad = null;
    this.persona.mensaje = null;


  }

  guardarPersona(){


    console.log(this.persona)
    this.spinnerService.show();

    this.personaService.personaAgrega(this.persona)
        .subscribe(
          (data:any) => {
            this.exito = true;
            this.persona = data;

            if (this.persona.mensaje !== null){
              this.siMensaje = true;
            }

            console.log(data)
            this.spinnerService.hide();
          }
        )

  }

}
