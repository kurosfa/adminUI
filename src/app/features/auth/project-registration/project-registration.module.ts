import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectRegistrationComponent} from "./project-registration.component";
import {TuiButtonModule, TuiErrorModule} from "@taiga-ui/core";
import {TuiFieldErrorPipeModule, TuiInputModule} from "@taiga-ui/kit";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
	declarations: [ProjectRegistrationComponent],
	exports: [
		ProjectRegistrationComponent
	],
	imports: [
		CommonModule,
		TuiInputModule,
		ReactiveFormsModule,
		TuiErrorModule,
		TuiButtonModule,
		TuiFieldErrorPipeModule,
	]
})
export class ProjectRegistrationModule {
}
