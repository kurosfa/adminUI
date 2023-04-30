import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TUI_VALIDATION_ERRORS} from "@taiga-ui/kit";
import {Organization} from "../../shared/models/organization";
import {AuthService} from "../services/auth.service";

@Component({
	selector: 'app-organization-input-page',
	templateUrl: './organization-input.component.html',
	styleUrls: ['./organization-input.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [{
		provide: TUI_VALIDATION_ERRORS,
		useValue: {
			required: 'Поле обязательное для заполнения',
		},
	},]
})
export class OrganizationInputComponent {

	readonly form = new FormGroup({
		name: new FormControl('', Validators.required)
	})

	constructor(private readonly service: AuthService) {
	}

	createOrganization() {
		if (this.form.valid) {
			this.service.createOrganization(this.form.getRawValue() as Organization)
		}
	}
}
