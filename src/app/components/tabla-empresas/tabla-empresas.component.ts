import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresasModel } from 'src/app/models/empresas';
import { EmpresasService } from 'src/app/services/empresas/empresas.service';

@Component({
  selector: 'app-tabla-empresas',
  templateUrl: './tabla-empresas.component.html',
  styleUrls: ['./tabla-empresas.component.scss']
})
export class TablaEmpresasComponent implements OnInit {

  public empresas: EmpresasModel[]=[];

  constructor(private empresasService: EmpresasService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    this.empresas = await this.obtenerEmpresas();
    console.log(this.empresas);
  }

  public async obtenerEmpresas(): Promise<any>{
    try{
      const response =await this.empresasService.obtenerEmpesas();
      return response.datos;
    }catch(error){
      //this.router.navigate(['/error']);
      console.log(error);
    }
  }

  public eliminarEmpresa(id:number){
    this.empresasService.eliminarEmpesa(id).then(async response=>{
      if(response.message==='deleted'){
        this.empresas =await this.obtenerEmpresas();
        alert('Empresa eliminada correctamente');
      }
    }).catch(error =>{
      this.router.navigate(['/error']);
    })
  }

}
