import {RequirementListServicesModule} from "./requirement-list-services.module";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {ErrorPageService} from "../../../shared/error-page/error-page.service";
import {RequirementApiService} from "../../services/requirements-api.service";
import {Requirement} from "../../../shared/models/requirement";
import {BehaviorSubject} from "rxjs";

@Injectable({
	providedIn: RequirementListServicesModule,
})
export class RequirementListService {
	private readonly requirements$$ = new BehaviorSubject<ReadonlyArray<Requirement>>(null);
	readonly requirements$ = this.requirements$$.pipe();

	constructor(
		private readonly requirementApiService: RequirementApiService,
		private readonly router: Router,
		private readonly errorPageService: ErrorPageService,
	) {
	}

	getAllRequirements() {
		this.requirementApiService.getAllRequirements().subscribe({
			next: (r) => {
				this.requirements$$.next(r)
			},
			error: () => this.errorPageService.showErrorNotification(),
		})
	}

	goToFeature(id: number) {
		this.router.navigate(['requirements', id])
	}

	goToCreateFeature() {
		this.router.navigate(['requirements', 'create'])
	}
}
