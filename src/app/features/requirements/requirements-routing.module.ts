import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RequirementsComponent} from "./requirements.component";
import {RequirementListComponent} from "./requirement-list/requirement-list.component";
import {RequirementPageComponent} from "./requirement-page/requirement-page.component";
import {RequirementCreatePageComponent} from "./requirement-craete-page/requirement-create-page.component";

const routes: Routes = [
	{
		path: '',
		component: RequirementsComponent,
		children: [
			{
				path: 'list',
				component: RequirementListComponent
			},
			{
				path: 'create',
				component: RequirementCreatePageComponent
			},
			{
				path: ':id',
				component: RequirementPageComponent
			},
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class RequirementsRoutingModule {
}
