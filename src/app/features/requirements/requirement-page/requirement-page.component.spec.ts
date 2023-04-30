import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RequirementPageComponent} from './requirement-page.component';

describe('RequirementPageComponent', () => {
	let component: RequirementPageComponent;
	let fixture: ComponentFixture<RequirementPageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RequirementPageComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(RequirementPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
