import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { ErrorComponent } from './components/error/error.component';
import { FormularioEmpresaComponent } from './components/formulario-empresa/formulario-empresa.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [
  {path: 'empresas', component: EmpresasComponent},
  {path: 'formulario-empresa', component: FormularioEmpresaComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: '', component: ErrorComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
