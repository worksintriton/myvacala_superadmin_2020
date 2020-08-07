import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { OtploginComponent } from './views/buttons/otplogin/otplogin.component';
import { OtpvalidationComponent } from './views/buttons/otpvalidation/otpvalidation.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'EmployeeLogin',
    component: OtploginComponent,
    data: {
      title: 'Brand buttons'
    }
  },
  {
    path: 'OtpValidation',
    component: OtpvalidationComponent,
    data: {
      title: 'Brand buttons'
    }
  },
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //   data: {
  //     title: 'Login Page'
  //   }
  // },
  {
    path: 'superadmin',
    component: DefaultLayoutComponent,
    data: {
      title: 'Superadmin'
    },
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'Login Page'
        }
      },

      {
        path: 'master',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },

      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
