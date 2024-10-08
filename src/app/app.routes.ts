import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components/layout/main-layout-component/main-layout-component.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeworkComponent } from './pages/homework/homework.component';

export const routes: Routes = [
  //   { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  //   {
  //     path: 'auth',
  //     component: AuthLayoutComponent,
  //     children: [{ path: 'login', component:  }],
  //   },
  {
    path: '',
    component: MainLayoutComponent, // Layout chính có header và footer
    children: [
      { path: '', component: HomeComponent },
      { path: 'homework', component: HomeworkComponent },
      //   { path: 'codes', component: CodeManagementPageComponent },
      //   { path: 'statistical', component: StatisticalComponent },
    ],
  },
  //   { path: '**', component: PageNotFoundComponent },
];
