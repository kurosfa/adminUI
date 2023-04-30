import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {Requirement} from "../../shared/models/requirement";

@Injectable({
	providedIn: 'root'
})
export class RequirementApiService {
	projectId: number;
	private api = 'http://localhost:8080/api/v1/requirements'

	constructor(private readonly http: HttpClient) {
		this.projectId = Number(localStorage.getItem('projectId'))
	}

	createRequirement(requirement: Requirement): Observable<any> {
		const newRequirement: Requirement = {
			id: null,
			name: requirement.name,
			description: requirement.description,
			status: requirement.status,
			projectId: this.projectId
		}

		return this.http.post(this.api, newRequirement).pipe(catchError(err => {
			return new Observable(err);
		}));
	}

	getRequirement(id: number): Observable<any> {
		return this.http.get(`${this.api}/${id}`).pipe(catchError(err => {
			return new Observable(err);
		}));
	}

	getAllRequirements(): Observable<any> {
		return this.http.get(`${this.api}/by-project-id/${this.projectId}`).pipe(catchError(err => {
			return new Observable(err);
		}));
	}

	updateRequirement(value: Requirement): Observable<any> {
		return this.http.put(`${this.api}/${value.id}`, value).pipe(catchError(err => {
			return new Observable(err);
		}));
	}

	deleteRequirement(id: number): Observable<any> {
		return this.http.delete(`${this.api}/${id}`).pipe(catchError(err => {
			return new Observable(err);
		}));
	}
}
