import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';
import { EmpresasModel } from 'src/app/models/empresas';
import { EmpresasService } from 'src/app/services/empresas/empresas.service';

@Component({
  selector: 'app-formulario-empresa',
  templateUrl: './formulario-empresa.component.html',
  styleUrls: ['./formulario-empresa.component.scss']
})
export class FormularioEmpresaComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({});
  public empresaActualizar: EmpresasModel | null = null;

  constructor (private formBuilder: FormBuilder, private empresasService: EmpresasService, private router: Router) { }

  ngOnInit(): void {
    const actualizar =localStorage.getItem('empresaActualizar');
    this.empresaActualizar = actualizar ? JSON.parse(actualizar) : null;
    console.log(this.empresaActualizar);
    this.buildForm();
  }

  private buildForm(){
    this.formGroup = this.formBuilder.group({
      nombre: [this.empresaActualizar?.nombre_empresa, Validators.required],
      ciudad: [this.empresaActualizar?.ciudad_empresa, Validators.required],
      direccion: [this.empresaActualizar?.direccion_empresa, Validators.required],
      telefono: [this.empresaActualizar?.telefono_empresa, Validators.required],
      email: [this.empresaActualizar?.email_empresa, Validators.required],
      categoria: [this.empresaActualizar?.categoria_empresa, Validators.required],
      status: [this.empresaActualizar?.status_empresa, Validators.required]
    })
  }

  public agregarEmpresa(){
    console.log(this.formGroup.value);
    this.empresasService.agregarEmpresa(this.formGroup.value).then(response=>{
      alert('Empresa creada correctamente');
      this.router.navigate(['/empresas']);
    }).catch(error =>{
      this.router.navigate(['/error']);
    })
  }

  public actualizarEmpresa(){
    console.log(this.formGroup.value);
    const empresa: EmpresasModel = {
      id_empresa: this.empresaActualizar?.id_empresa,
      ...this.formGroup.value
    }
    this.empresasService.actualizarEmpesa(empresa).then(response =>{
      if (response.message === 'updated'){
        alert('Empresa actualizada correctamente');
        this.router.navigate([empresa]);
      }
    }).catch(error =>{
      this.router.navigate(['/error']);
    })
  }
}
