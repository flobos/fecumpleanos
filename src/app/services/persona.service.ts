import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"
import { Persona } from "../models/Persona";


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private endpoint = 'http://127.0.0.1:8080/api/persona' ;

  constructor(private http: HttpClient) { }

  personaAgrega(persona: Persona): Observable<object>{

    return this.http.post(this.endpoint, persona);

  }


}
