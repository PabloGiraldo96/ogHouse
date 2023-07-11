import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DestiladosService {

public url: string = "https://api-og-backend.vercel.app"

  constructor(public servicioDestilados: HttpClient) { }

public registrarDestilados(datos: any): Observable<any>{
  let endpoint = "/registrardestilado"
  let urlServicio: string = this.url + endpoint
return this.servicioDestilados.post(urlServicio, datos)
}

public buscarDestilados(): Observable<any>{ 
  let endpoint ="/buscardestilados"
  let uri = this.url+endpoint
return this.servicioDestilados.get(uri)
}

public buscarDestilado(){}

public editarDestilados(){}


}
