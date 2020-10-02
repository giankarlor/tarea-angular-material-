import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './private/clientes/clientes.component';
import { EmpleadosComponent } from './private/empleados/empleados.component';
import { FacturasComponent } from './private/facturas/facturas.component';
import { ProductosComponent } from './private/productos/productos.component';
import { ProductosFacturasComponent } from './private/productos-facturas/productos-facturas.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { InterceptorService } from './services/interceptor.service';
import { ClienteFormComponent } from './private/cliente-form/cliente-form.component';
import { FacturaFormComponent } from './private/factura-form/factura-form.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { InicioComponent } from './public/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    EmpleadosComponent,
    FacturasComponent,
    ProductosComponent,
    ProductosFacturasComponent,
    ClienteFormComponent,
    FacturaFormComponent,
    InicioComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule
     
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
