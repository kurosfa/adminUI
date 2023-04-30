import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {Organization} from "../../shared/models/organization";

@Injectable({
	providedIn: 'root'
})
export class OrganizationApiService {
	private api = 'http://localhost:8080/api/v1/organizations'

	constructor(private readonly http: HttpClient) {
	}

	createOrganization(organization: Organization): Observable<any> {
		return this.http.post(this.api, organization).pipe(catchError(err => {
			return new Observable(err);
		}));
	}

}
