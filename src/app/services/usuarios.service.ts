import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }
/*PETICIONES HTTP
  Se deben enviar los parametros ,tal como lo espera el backend
  */
 public obtenerUsuario(){

 }

 public agregarUsuario(usuario: any): Promise<any>{
   const url =`${environment.apiUrl}/agregarUsuario`;
   return this.http.post(url, usuario).toPromise(); //enviar datos como body

 }

 public actualizarUsuario(){
}

public desactivarUsuario(){
}

public validarUsuario(datos: any): Promise<any>{
  const url = `${environment.apiUrl}/validarUsuario`;
  return this.http.get(url, {headers: datos}).toPromise(); //Enviar datos como headers
}

}
