import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { ObjectService } from './shared/object.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { SearchObjetosComponent } from './search-objetos/search-objetos.component';
import { environment } from '../environments/environment';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';
import { ObjetosComponent } from './objetos/objetos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    SearchObjetosComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    InicioComponent,
    SobreComponent,
    ObjetosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ObjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
