import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ProjectApiService} from "./services/project-api.service";
import {OrganizationApiService} from "./services/organization-api.service";

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [ProjectApiService, OrganizationApiService]
})
export class AuthComponent {
}
