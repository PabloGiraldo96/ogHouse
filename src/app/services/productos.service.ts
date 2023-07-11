import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

public url: string = "https://api-og-backend.vercel.app"

  constructor(public servicioProductos: HttpClient){ }

public registrarProductos(datos: any): Observable<any>{
  let endpoint= "/registrarproducto"
  let urlServicio: string = this.url + endpoint
return this.servicioProductos.post(urlServicio, datos)
}

public buscarProductos(): Observable<any>{
  let endpoint="/buscarproductos"
  let uri = this.url+endpoint
return this.servicioProductos.get(uri)
}

public buscarProducto(){}

public editarProductos(){}
}
