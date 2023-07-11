import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class ExtraccionesService {

public url: string = "https://api-og-backend.vercel.app"

  constructor(public servicioExtracciones: HttpClient) { }

public registrarExtracciones(datos: any): Observable<any>{
let endpoint= "/registrarextraccion"
let urlServicio: string = this.url + endpoint
return this.servicioExtracciones.post(urlServicio, datos)
}

public buscarExtracciones(): Observable<any>{ 
let endpoint ="/buscarextracciones"
let uri = this.url+endpoint
return this.servicioExtracciones.get(uri)
}

public buscarExtraccion(){ }

public editarExtracciones(){ }

}
