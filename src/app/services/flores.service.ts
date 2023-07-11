import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class FloresService {

public url: string = "https://api-og-backend.vercel.app"

constructor(public servicioFlores: HttpClient) { }

public registrarFlores(datos: any): Observable<any>{
let endpoint= "/registrarflor"
let urlServicio: string = this.url + endpoint
return this.servicioFlores.post(urlServicio, datos)
}

public buscarFlores(): Observable<any> {
let endpoint ="/buscarflores"
let uri = this.url+endpoint
return this.servicioFlores.get(uri)
}

public buscarFlor(){}

public editarFlor(){}

}

