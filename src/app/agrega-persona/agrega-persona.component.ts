import { Component, OnInit } from '@angular/core';
import { Persona } from "../models/Persona";
import { PersonaService } from "../services/persona.service";

@Component({
  selector: 'app-agrega-persona',
  templateUrl: './agrega-persona.component.html',
  styleUrls: ['./agrega-persona.component.css']
})
export class AgregaPersonaComponent implements OnInit {

  persona: Persona = new Persona;
  exito: boolean = false;
  siMensaje: boolean = false;


  constructor(private personaService: PersonaService) { }

  ngOnInit() {
  }

  enviar(){

      this.guardarPersona()


  }

  guardarPersona(){


    console.log(this.persona)


    this.personaService.personaAgrega(this.persona)
        .subscribe(
          data => {
            this.exito = true;
            this.persona = data;

            if (this.persona.mensaje !== null){
              this.siMensaje = true;
            }

            console.log(data)
          }
        )

  }

}
