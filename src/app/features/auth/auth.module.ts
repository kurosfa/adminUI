import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {RouterOutlet} from "@angular/router";
import {AuthRoutingModule} from "./auth-routing.module";
import {ProjectRegistrationModule} from "./project-registration/project-registration.module";
import {OrganizationInputModule} from "./organization-input/organization-input.module";
import {AuthServicesModule} from "./services/auth-services.module";


@NgModule({
	declarations: [
		AuthComponent
	],
	imports: [
		CommonModule,
		RouterOutlet,
		AuthRoutingModule,
		AuthServicesModule,
		ProjectRegistrationModule,
		OrganizationInputModule
	]
})
export class AuthModule {
}
