import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class ComestiblesService {

public url: string = "https://api-og-backend.vercel.app"

  constructor(public servicioComestibles: HttpClient) { }

public registrarComestible(datos: any): Observable<any>{
let endpoint = "/registrarcomestible"
let urlServicio: string = this.url + endpoint
return this.servicioComestibles.post(urlServicio, datos)
}

public buscarComestibles(): Observable<any> {
let endpoint = "/buscarcomestibles"
let uri = this.url+endpoint
return this.servicioComestibles.get(uri)
}

public buscarComestible(){}

public editarComestible(){}

}
