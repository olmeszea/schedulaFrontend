import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmpresasModel } from 'src/app/models/empresas';

@Injectable({
  providedIn: 'root'
})

//se crea el servicio para listar las empresas existentes en la DB, para luego inyectarlo 
//donse se requiera ()
//se debe configurar app.module.ts agregando en "imports:"" el modulo httpClientModule
//y tambien agregar en "providers:"" el servicio que se va a utilizar (se agregan todos los
//servicios que  se van a utilizar)
//recordar crear los headers de validación para la conexion con el backend

export class EmpresasService {

  constructor(private http: HttpClient) { }

  public obtenerEmpesas(): Promise<any>{
    const url=`${environment.apiUrl}/obtenerEmpresas`;
    return this.http.get(url).toPromise();
  }
  public obtenerEmpesa(id: number){}

  public agregarEmpresa(empresa: any): Promise<any>{
    const url = `${environment.apiUrl}/agregarEmpresa`;
    return this.http.post(url, empresa).toPromise();
  }

  public actualizarEmpesa(empresa: EmpresasModel): Promise<any>{
    const url = `${environment.apiUrl}/actualizarEmpresa/${empresa.id_empresa}`
    return this.http.put(url, empresa).toPromise();
  }

  public eliminarEmpresa(id: number): Promise<any>{
    return this.http.delete(`${environment.apiUrl}/eliminarEmpresa/${id}`).toPromise();
  }

}
