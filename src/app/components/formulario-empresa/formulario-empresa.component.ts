import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  public empresaAgregar: EmpresasModel | null = null;

  constructor (private formBuilder: FormBuilder, private empresasService: EmpresasService, private router: Router) { }

  ngOnInit(): void {
    const actualizar =localStorage.getItem('empresaActualizar');
    this.empresaActualizar = actualizar ? JSON.parse(actualizar) : null;
    //crear la constante para almacenar el dato id_usuario admin que se logea para usarlo
    //en la creacion de la empresa (xx)

    console.log(this.empresaActualizar);
    this.buildForm();
  }

  private buildForm(){
    this.formGroup = this.formBuilder.group({
      nombre_empresa: [this.empresaActualizar?.nombre_empresa, Validators.required],
      ciudad_empresa: [this.empresaActualizar?.ciudad_empresa, Validators.required],
      direccion_empresa: [this.empresaActualizar?.direccion_empresa, Validators.required],
      telefono_empresa: [this.empresaActualizar?.telefono_empresa, Validators.required],
      email_empresa: [this.empresaActualizar?.email_empresa, Validators.required],
      categoria_empresa: [this.empresaActualizar?.categoria_empresa, Validators.required]
      //status: [this.empresaActualizar?.status_empresa, Validators.required]
    })
  }

  public agregarEmpresa(){
    //(xx)...Para agregar una empresa se debe agregar el dato de id_usuario (clave foranea)
    //de la tabla usuarios_empresa. Se debe incluir ese dato al resultado de "value"
    console.log(this.formGroup.value);
    console.log(this.formGroup.value + " antes de partir");
    //IMPORTANTE:  El dato "id_usuario" se agrega manualmente. Se debe modificar este pnto
    //cuando se unifique la aplicacion con la tabla de usuarios, y se pueda realizar la 
    //debida consulta para agregar el usuario.  La parte de status es una caracteristica que
    //la manipula el administrador.
    const empresaModif: EmpresasModel = {
      id_usuario: 3,
      status_empresa: 'Activo',
      ...this.formGroup.value,
    }
    console.log(this.formGroup.value + "en la llegada");
    this.empresasService.agregarEmpresa(empresaModif).then(response=>{
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
      id_usuario: this.empresaActualizar?.id_usuario,
      status_empresa: this.empresaActualizar?.status_empresa,
      ...this.formGroup.value
    }
    console.log(empresa);
    this.empresasService.actualizarEmpresa(empresa).then(response =>{
      if (response.message === 'updated'){
        alert('Empresa actualizada correctamente');
        this.router.navigate(['/empresas']);
      }
    }).catch(error =>{
      this.router.navigate(['/error']);
    })
  }
}
