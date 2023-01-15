import { FormControl, ValidatorFn } from '@angular/forms';

export function imageUrlValidator(control: FormControl): { [key: string]: any; } {
    const url = control.value;
    if (!url) {
        return {};
    }

    const validExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
    const extension = url.substr(url.lastIndexOf('.'));

    if (validExtensions.indexOf(extension) < 0) {
        return { invalidImageUrl: true };
    }
    return {};
}