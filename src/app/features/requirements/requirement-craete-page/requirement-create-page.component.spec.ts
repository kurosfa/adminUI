import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RequirementCreatePageComponent} from './requirement-create-page.component';

describe('RequirementPageComponent', () => {
	let component: RequirementCreatePageComponent;
	let fixture: ComponentFixture<RequirementCreatePageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RequirementCreatePageComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(RequirementCreatePageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
