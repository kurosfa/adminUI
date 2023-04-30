import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TUI_VALIDATION_ERRORS} from "@taiga-ui/kit";
import {Project} from "../../shared/models/project";
import {AuthService} from "../services/auth.service";

@Component({
	selector: 'app-project-registration-page',
	templateUrl: './project-registration.component.html',
	styleUrls: ['./project-registration.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: TUI_VALIDATION_ERRORS,
			useValue: {
				required: 'Поле обязательное для заполнения',
			}
		}
	]
})
export class ProjectRegistrationComponent {

	readonly form = new FormGroup({
		name: new FormControl('', Validators.required)
	})

	constructor(private readonly service: AuthService,) {
	}

	createProject() {
		if (this.form.valid) {
			this.service.createProject(this.form.getRawValue() as Project)
		}
	}
}
