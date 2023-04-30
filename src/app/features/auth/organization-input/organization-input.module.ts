import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrganizationInputComponent} from "./organization-input.component";
import {TuiButtonModule, TuiErrorModule} from "@taiga-ui/core";
import {TuiFieldErrorPipeModule, TuiInputModule} from "@taiga-ui/kit";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
	declarations: [OrganizationInputComponent],
	exports: [
		OrganizationInputComponent
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
export class OrganizationInputModule {
}
