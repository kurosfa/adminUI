import {RequirementPageServicesModule} from "./requirement-page-services.module";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {ErrorPageService} from "../../../shared/error-page/error-page.service";
import {RequirementApiService} from "../../services/requirements-api.service";
import {Requirement} from "../../../shared/models/requirement";
import {BehaviorSubject} from "rxjs";

@Injectable({
	providedIn: RequirementPageServicesModule,
})
export class RequirementPageService {
	private readonly requirement$$ = new BehaviorSubject<Requirement>(null);
	readonly requirement$ = this.requirement$$.pipe();

	constructor(
		private readonly requirementApiService: RequirementApiService,
		private readonly router: Router,
		private readonly errorPageService: ErrorPageService,
	) {
	}

	loadRequirement(id: number) {
		this.requirementApiService
			.getRequirement(id)
			.subscribe({
				next: (r) => {
					this.requirement$$.next(r)
				},
				error: () => this.errorPageService.showErrorNotification(),
			});
	}

	changeStatus(value: Requirement) {
		const newValue: Requirement = {
			id: value.id,
			name: value.name,
			description: value.description,
			projectId: value.projectId,
			status: !value.status
		}
		this.requirementApiService.updateRequirement(newValue).subscribe({
			next: (r) => {
				this.requirement$$.next(r)
			},
			error: () => this.errorPageService.showErrorNotification(),
		});
	}

	goToFeatureList() {
		this.router.navigate(['requirements', 'list'])
	}
}
