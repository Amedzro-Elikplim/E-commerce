import { NgModule } from "@angular/core";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { FormsModule } from "@angular/forms";
@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    
    imports: [
        FormsModule
    ]
})

export class ComponentModule { }