import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { ErrorComponent } from './components/error/error.component';
import { FormularioEmpresaComponent } from './components/formulario-empresa/formulario-empresa.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ConveniosComponent } from './components/convenios/convenios.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HeaderSimpleComponent } from './components/header-simple/header-simple.component';

const routes: Routes = [
  {path: 'empresas', component: EmpresasComponent},
  {path: 'convenios', component: ConveniosComponent},
  {path: 'formulario-empresa', component: FormularioEmpresaComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: '', component: ErrorComponent},
  //{path: '**', component: NotfoundComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'header-simple', component: HeaderSimpleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
