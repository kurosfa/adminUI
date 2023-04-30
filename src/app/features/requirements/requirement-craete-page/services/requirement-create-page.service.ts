import {RequirementCreatePageServicesModule} from "./requirement-create-page-services.module";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {ErrorPageService} from "../../../shared/error-page/error-page.service";
import {RequirementApiService} from "../../services/requirements-api.service";
import {Requirement} from "../../../shared/models/requirement";

@Injectable({
	providedIn: RequirementCreatePageServicesModule,
})
export class RequirementCreatePageService {

	constructor(
		private readonly requirementApiService: RequirementApiService,
		private readonly router: Router,
		private readonly errorPageService: ErrorPageService,
	) {
	}

	createRequirement(value: Requirement) {
		this.requirementApiService.createRequirement(value).subscribe({
			next: (r: Requirement) => {
				this.router.navigate(['requirements', r.id])
			},
			error: () => this.errorPageService.showErrorNotification(),
		});
	}

	goToFeatureList() {
		this.router.navigate(['requirements', 'list'])
	}

}
