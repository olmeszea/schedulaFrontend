import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TablaEmpresasComponent } from './components/tabla-empresas/tabla-empresas.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpresasService } from './services/empresas/empresas.service';
import { ErrorComponent } from './components/error/error.component';
import { FormularioEmpresaComponent } from './components/formulario-empresa/formulario-empresa.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConveniosComponent } from './components/convenios/convenios.component';
import { VerConveniosComponent } from './components/ver-convenios/ver-convenios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TablaEmpresasComponent,
    NotfoundComponent,
    UsuariosComponent,
    EmpresasComponent,
    ErrorComponent,
    FormularioEmpresaComponent,
    ConveniosComponent,
    VerConveniosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  //al crear un servicio del modulo HttpClient, se debe importar
                        //el modulo HttpClientModule de forma manual.  
    ReactiveFormsModule
  ],
  providers: [EmpresasService], //al inyectar el servicio, debemos agregar la solicitud aqui
  bootstrap: [AppComponent]
})
export class AppModule { }
