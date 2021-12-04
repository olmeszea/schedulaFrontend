import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  //Atributos
  public formUsuarios: FormGroup = new FormGroup({});


  //Constructor
  constructor(private usuariosService: UsuariosService, private formBuilder: FormBuilder, private router: Router) { }


  //Metodo al iniciar componente
  ngOnInit(): void {
    this.buildUsuarios();
  }


  //Metodo para crear grupo de inputs del formulario registro
  private buildUsuarios(){
    this.formUsuarios = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(30)]],
      apellido: ['', [Validators.required, Validators.maxLength(30)]],
      telefono: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(30)]],
      status: ['Activo'],
      password: ['', [Validators.required, Validators.maxLength(10)]],
      identificacion: ['', [Validators.required, Validators.maxLength(10)]],
      tipo: ['', Validators.required],
      recuperar: ['0'],
      rol: ['Cliente']
    });
  }

  //Metodo para agregar usuario: llamar peticion HTTP
  public agregarUsuario(){
    this.usuariosService.agregarUsuario(this.formUsuarios.value).then(response =>{
      //Backend retorna mensaje todo ok y el id
      if(response.message == 'created'){
        alert('Usuario registrado correctamente');
        this.router.navigate(['/']);
      }
    }).catch(error =>{
      console.log(error);
    })
  }
}
