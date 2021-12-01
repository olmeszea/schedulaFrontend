import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresasModel } from 'src/app/models/empresas';
import { EmpresasService } from 'src/app/services/empresas/empresas.service';
//import { TablaEmpresasComponent} from '../tabla-empresas/tabla-empresas.component';

@Component({
  selector: 'app-ver-convenios',
  templateUrl: './ver-convenios.component.html',
  styleUrls: ['./ver-convenios.component.scss']
})

export class VerConveniosComponent implements OnInit {

  public convenios: EmpresasModel[]=[];

  constructor(private empresasService: EmpresasService, private router: Router ) { }

  async ngOnInit(): Promise <void> {
    this.convenios = await this.obtenerEmpresas();
  }

  public async obtenerEmpresas(): Promise<any>{
    try{
      const response =await this.empresasService.obtenerEmpesas();
      return response.datos;
    }catch(error){
      this.router.navigate(['/error']);
      console.log(error);
    }
  }

}




