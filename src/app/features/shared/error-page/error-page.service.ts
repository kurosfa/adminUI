import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {TuiAlertService, TuiNotification} from '@taiga-ui/core';

@Injectable({
	providedIn: 'root',
})
export class ErrorPageService {
	constructor(
		private readonly router: Router,
		private readonly notificationsService: TuiAlertService,
	) {
	}

	navigateToNotFoundPage(replaceUrl = false) {
		this.router.navigate(['/error', '404'], {
			replaceUrl,
		});
	}

	navigateErrorPage(status: number, replaceUrl = false) {
		this.router.navigate(['/error', String(status)], {
			replaceUrl,
		});
	}

	showErrorNotification(
		errorMessage: string = 'Что-то пошлло не так. Повторите попытку позже',
		errorLabel?: string,
		hasCloseButton: boolean = true,
	) {
		this.notificationsService
			.open(errorMessage, {
				status: TuiNotification.Error,
				hasCloseButton: hasCloseButton,
				label: errorLabel,
			})
			.subscribe();
	}
}
