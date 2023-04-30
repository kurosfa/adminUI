import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full',
	},
	{
		path: 'login',
		loadChildren: () =>
			import('src/app/features/auth/auth.module')
				.then(m => m.AuthModule)
	},
	{
		path: 'requirements',
		loadChildren: () =>
			import('src/app/features/requirements/requirements.module')
				.then(m => m.RequirementsModule)
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
