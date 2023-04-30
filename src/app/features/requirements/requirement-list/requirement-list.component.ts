import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {RequirementListService} from "./services/requirement-list.service";

@Component({
	selector: 'app-requirement-list',
	templateUrl: './requirement-list.component.html',
	styleUrls: ['./requirement-list.component.less'],
	providers: [RequirementListService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequirementListComponent implements OnInit {


	constructor(readonly service: RequirementListService) {
	}

	ngOnInit(): void {
		this.service.getAllRequirements();
	}

	getStatus(status: boolean): "success" | "error" {
		return status ? "success" : "error";
	}

}
