import {AuthServicesModule} from "./auth-services.module";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {Project} from "../../shared/models/project";
import {ProjectApiService} from "./project-api.service";
import {ErrorPageService} from "../../shared/error-page/error-page.service";
import {Organization} from "../../shared/models/organization";
import {OrganizationApiService} from "./organization-api.service";

@Injectable({
	providedIn: AuthServicesModule,
})
export class AuthService {
	private organizationId: number;

	private readonly project$$ = new BehaviorSubject<Project>(null);
	readonly project$ = this.project$$.pipe();

	constructor(
		private readonly organizationApiService: OrganizationApiService,
		private readonly projectApiService: ProjectApiService,
		private readonly router: Router,
		private readonly errorPageService: ErrorPageService,
	) {
	}

	createProject(project: Project) {
		const newProject: Project = {
			id: null,
			name: project.name,
			organizationId: this.organizationId
		};

		this.projectApiService
			.createProject(newProject)
			.subscribe({
				next: (project) => {
					this.project$$.next(project)
					localStorage.setItem('projectId', project.id)
					this.router.navigate(['/requirements', 'list'])
				},
				error: () => this.errorPageService.showErrorNotification(),
			});
	}

	createOrganization(organization: Organization) {
		this.organizationApiService
			.createOrganization(organization)
			.subscribe({
				next: (organization: Organization) => {
					this.organizationId = organization.id
					this.router.navigate(['login', 'project'])
				},
				error: () => this.errorPageService.showErrorNotification(),
			});
	}
}
