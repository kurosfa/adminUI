import {NgDompurifySanitizer} from "@tinkoff/ng-dompurify";
import {TUI_SANITIZER, TuiAlertModule, TuiDialogModule, TuiRootModule,} from "@taiga-ui/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		TuiRootModule,
		TuiDialogModule,
		TuiAlertModule,
		RouterModule.forRoot(routes, {
			relativeLinkResolution: 'legacy',
			paramsInheritanceStrategy: 'always',
			enableTracing: false,
			scrollPositionRestoration: 'enabled',
		}),
	],
	providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
	bootstrap: [AppComponent]
})
export class AppModule { }
