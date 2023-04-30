import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RequirementPageComponent} from './requirement-page.component';
import {TuiInputModule, TuiToggleModule} from "@taiga-ui/kit";
import {ReactiveFormsModule} from "@angular/forms";
import {TuiLetModule} from "@taiga-ui/cdk";
import {TuiButtonModule, TuiSvgModule} from "@taiga-ui/core";


@NgModule({
	declarations: [
		RequirementPageComponent
	],
	imports: [
		CommonModule,
		TuiToggleModule,
		ReactiveFormsModule,
		TuiInputModule,
		TuiLetModule,
		TuiSvgModule,
		TuiButtonModule
	]
})
export class RequirementPageModule {
}
