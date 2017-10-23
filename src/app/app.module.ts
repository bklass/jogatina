import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TabelaClientesComponent } from './tabela-clientes/tabela-clientes.component';
import { FormClientesComponent } from './form-clientes/form-clientes.component';
import { CrudClientesService } from 'app/crud-clientes.service';
import { TabelaMesasComponent } from './tabela-mesas/tabela-mesas.component';
import { FormMesasComponent } from './form-mesas/form-mesas.component';
import { CrudMesasService } from 'app/crud-mesas.service';
import { TabelaJogosComponent } from './tabela-jogos/tabela-jogos.component';
import { FormJogosComponent } from './form-jogos/form-jogos.component';
import { CrudJogosService } from 'app/crud-jogos.service';

const routes: Routes = [
  { path: '', redirectTo: 'listaCliente', pathMatch: 'full' },
  { path: 'listaCliente', component: TabelaClientesComponent },
  { path: 'edicaoCliente/:cod', component: FormClientesComponent },
  { path: 'novoCliente', component: FormClientesComponent },
  { path: 'listaJogo', component: TabelaJogosComponent },
  { path: 'edicaoJogo/:cod', component: FormJogosComponent },
  { path: 'novoJogo', component: FormJogosComponent },
  { path: 'listaMesa', component: TabelaMesasComponent },
  { path: 'edicaoMesa/:cod', component: FormMesasComponent },
  { path: 'novaMesa', component: FormMesasComponent }
  ]

@NgModule({
  declarations: [
    AppComponent,
    TabelaClientesComponent,
    FormClientesComponent,
    TabelaMesasComponent,
    FormMesasComponent,
    TabelaJogosComponent,
    FormJogosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CrudClientesService, CrudJogosService, CrudMesasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
