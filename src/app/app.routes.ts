import { InicioComponent } from './inicio/inicio.component';
import {Routes} from '@angular/router'
import { SobreComponent } from './sobre/sobre.component';
import { SearchObjetosComponent } from './search-objetos/search-objetos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ShowMetadatosComponent } from './show-metadatos/show-metadatos.component';
import { ObjetosComponent } from './objetos/objetos.component';


export const ROUTES: Routes = [
  {path: '', component: InicioComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'search-objetos', component: SearchObjetosComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'show-metadatos', component: ShowMetadatosComponent},
  {path: 'objetos', component : ObjetosComponent}
]
