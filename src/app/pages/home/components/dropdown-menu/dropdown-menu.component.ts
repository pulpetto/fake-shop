import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-dropdown-menu',
    templateUrl: './dropdown-menu.component.html',
    styleUrls: ['./dropdown-menu.component.css'],
})
export class DropdownMenuComponent {
    @Input() listName: string = '';
    @Input() options: { label: string; checked: boolean }[] = [];

    selectedOption: string = '';
    isListVisible: boolean = false;

    toggleList(): void {
        this.isListVisible = !this.isListVisible;
    }

    selectOption(option: { label: string; checked: boolean }, e: any) {
        if (option.checked) {
            e.preventDefault();
            return;
        }

        this.options.forEach((opt) => {
            if (opt === option) {
                opt.checked = true;
                this.selectedOption = opt.label;
            } else {
                opt.checked = false;
            }
        });

        // if multiple selecets true call diferent function
        // if multiple selecets false call diferent function
    }
}
