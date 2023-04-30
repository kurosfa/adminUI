import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectRegistrationComponent} from "./project-registration/project-registration.component";
import {OrganizationInputComponent} from "./organization-input/organization-input.component";

const routes: Routes = [
	{
		path: '',
		redirectTo: 'organization',
		pathMatch: 'full',
	},
	{
		path: 'organization',
		component: OrganizationInputComponent
	},
	{
		path: 'project',
		component: ProjectRegistrationComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthRoutingModule {
}
