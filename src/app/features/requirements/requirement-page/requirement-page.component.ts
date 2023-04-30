import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {RequirementPageService} from "./services/requirement-page.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
	selector: 'app-requirement-page',
	templateUrl: './requirement-page.component.html',
	styleUrls: ['./requirement-page.component.less'],
	providers: [RequirementPageService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequirementPageComponent implements OnInit {

	readonly form = new FormGroup({
		status: new FormControl(),
	})

	constructor(readonly service: RequirementPageService, private readonly route: ActivatedRoute,) {
	}

	ngOnInit() {
		this.service.loadRequirement(this.route.snapshot.params['id']);
		this.service.requirement$.subscribe(value => this.form.reset({status: value?.status}))
	}

}
