import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RequirementListComponent} from './requirement-list.component';
import {TuiLetModule} from "@taiga-ui/cdk";
import {TuiBadgeModule, TuiToggleModule} from "@taiga-ui/kit";
import {TuiButtonModule} from "@taiga-ui/core";


@NgModule({
	declarations: [
		RequirementListComponent
	],
	imports: [
		CommonModule,
		TuiLetModule,
		TuiBadgeModule,
		TuiButtonModule,
		TuiToggleModule
	]
})
export class RequirementListModule {
}
