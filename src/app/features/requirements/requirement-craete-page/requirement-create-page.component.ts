import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RequirementCreatePageService} from "./services/requirement-create-page.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TUI_VALIDATION_ERRORS} from "@taiga-ui/kit";
import {Requirement} from "../../shared/models/requirement";

@Component({
	selector: 'app-requirement-create-page',
	templateUrl: './requirement-create-page.component.html',
	styleUrls: ['./requirement-create-page.component.less'],
	providers: [
		RequirementCreatePageService,
		{
			provide: TUI_VALIDATION_ERRORS,
			useValue: {
				required: 'Поле обязательное для заполнения',
			}
		}],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequirementCreatePageComponent {

	readonly form = new FormGroup({
		name: new FormControl('', Validators.required),
		description: new FormControl(''),
		status: new FormControl(false),
	})

	constructor(readonly service: RequirementCreatePageService) {
	}

	createRequirement() {
		if (this.form.valid) {
			this.service.createRequirement(this.form.getRawValue() as Requirement)
		}
	}

}
