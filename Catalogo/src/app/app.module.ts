import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CategoriaDetalheComponent } from './components/categoria-detalhe/categoria-detalhe.component';
import { CategoriaNovaComponent } from './components/categoria-nova/categoria-nova.component';
import { CategoriaEditarComponent } from './components/categoria-editar/categoria-editar.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { TestandoComponent } from './testando/testando.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { MenuComponent } from './menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    CategoriaDetalheComponent,
    CategoriaNovaComponent,
    CategoriaEditarComponent,
    LoginComponent,
    LogoutComponent,
    TestandoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
