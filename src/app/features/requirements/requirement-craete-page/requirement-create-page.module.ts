import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RequirementCreatePageComponent} from './requirement-create-page.component';
import {TuiFieldErrorPipeModule, TuiInputModule, TuiTextAreaModule, TuiToggleModule} from "@taiga-ui/kit";
import {ReactiveFormsModule} from "@angular/forms";
import {TuiLetModule} from "@taiga-ui/cdk";
import {TuiButtonModule, TuiErrorModule, TuiSvgModule} from "@taiga-ui/core";


@NgModule({
	declarations: [
		RequirementCreatePageComponent
	],
	imports: [
		CommonModule,
		TuiToggleModule,
		ReactiveFormsModule,
		TuiInputModule,
		TuiLetModule,
		TuiSvgModule,
		TuiButtonModule,
		TuiTextAreaModule,
		TuiErrorModule,
		TuiFieldErrorPipeModule
	]
})
export class RequirementCreatePageModule {
}
