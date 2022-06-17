import { NgModule } from '@angular/core';
import { RouterModule, Routes , PreloadAllModules } from '@angular/router';
import {AppRoutes} from './shared/Models/app/AppRoutes';
import { LoginComponent } from './components/authentication/login/login.component';
import {RegisterComponent} from './components/authentication/register/register.component';
import { AuthGuard } from './shared/helper/guards/auth.guard';
import { UnauthGuard } from './shared/helper/guards/unauth.guard';
import {content} from './shared/routes/content-routes'
import { ContentLayoutComponent } from './shared/components/content-layout/content-layout.component';
const routes: Routes = [
 {
  path:AppRoutes.Authentication.login.full,
  component:LoginComponent,
  pathMatch: "full",
  canActivate: [UnauthGuard]
 },
 {
  path:AppRoutes.Authentication.register.full,
  component:RegisterComponent,
  pathMatch: "full",
  canActivate: [UnauthGuard]
 },
 {
  path: "",
  component: ContentLayoutComponent,
  children: content,
  canActivate: [AuthGuard]
},
{
  path: "**",
  redirectTo: AppRoutes.home.full,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration:'top'
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
