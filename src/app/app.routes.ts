import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import {Routes} from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { SearchObjetosComponent } from './search-objetos/search-objetos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ShowMetadatosComponent } from './show-metadatos/show-metadatos.component';
import { ObjetosComponent } from './objetos/objetos.component';
import { SearchAdvancedComponent } from './search-advanced/search-advanced.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './autentication/auth.guard';

export const ROUTES: Routes = [
  {path: '', component: InicioComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'search-objetos', component: SearchObjetosComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'show-metadatos', component: ShowMetadatosComponent},
  {path: 'show-metadatos/:id', component: ShowMetadatosComponent},
  {path: 'objetos', component : ObjetosComponent},
  {path: 'search-advanced', component: SearchAdvancedComponent},
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}}
];
