import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {Project} from "../../shared/models/project";

@Injectable({
	providedIn: 'root'
})
export class ProjectApiService {
	private api = 'http://localhost:8080/api/v1/projects'

	constructor(private readonly http: HttpClient) {
	}

	createProject(project: Project): Observable<any> {
		return this.http.post(this.api, project).pipe(catchError(err => {
			return new Observable(err);
		}));
	}
}
