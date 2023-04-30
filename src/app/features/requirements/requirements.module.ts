import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RequirementsComponent} from './requirements.component';
import {RouterOutlet} from "@angular/router";
import {RequirementsRoutingModule} from "./requirements-routing.module";
import {RequirementListModule} from "./requirement-list/requirement-list.module";
import {RequirementPageModule} from "./requirement-page/requirement-page.module";
import {RequirementCreatePageModule} from "./requirement-craete-page/requirement-create-page.module";


@NgModule({
	declarations: [
		RequirementsComponent
	],
	imports: [
		CommonModule,
		RouterOutlet,
		RequirementListModule,
		RequirementPageModule,
		RequirementCreatePageModule,
		RequirementsRoutingModule,
	]
})
export class RequirementsModule {
}
