import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomepageComponent },
  {path: 'checkout', component: CheckoutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
