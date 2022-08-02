import { NgModule } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ProductServiceService } from '../services/product-service.service';
@NgModule({
  declarations: [LoginComponent, RegisterComponent, HomepageComponent, CheckoutPageComponent],

  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatBadgeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductServiceService]
})
export class ComponentModule {



}
