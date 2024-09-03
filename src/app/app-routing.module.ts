import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ErrorPageComponent } from './error/error-page.component';
import { LoginPageComponent } from './login/login-page.component';

import { MsgTelComponent } from './msg-tel/msg-tel.component';
import { NotificationComponent } from './notification/notification.component';
import { CourrierBloqComponent } from './courrier-bloq/courrier-bloq.component';
import { ForgotPasswordPageComponent } from './forgot-password/forgot-password-page.component';
import { DmcComponent } from './congé/dmc/dmc.component';
import { SuivieComponent } from './congé/suivie/suivie.component';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'bureau-dordre', loadChildren: () => import('./bureau-dordre/bureau-dordre.module').then(m => m.BureauDordreModule) },
  { path: 'bureau-daccueil', loadChildren: () => import('./bureau-daccueil/bureau-daccueil.module').then(m => m.BureauDaccueilModule) },
  { path: 'bureau-de-service', loadChildren: () => import('./bureau-de-service/bureau-de-service.module').then(m => m.BureauDeServiceModule) },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent},
  //{ path: '', redirectTo: '/login' },
  { path: 'notification', component: NotificationComponent},
  { path: 'courrier-bloque', component: CourrierBloqComponent},
  { path: 'congé/demande', component: DmcComponent},
  { path: 'congé/suivie', component: SuivieComponent },
  { path: 'msg-tel', component: MsgTelComponent},
  { path: 'error', component: ErrorPageComponent},
  { path: 'forgot-password', component: ForgotPasswordPageComponent},
  { path: '**', redirectTo: '/error' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
