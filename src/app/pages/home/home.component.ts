import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {
    // sorting
    options: { label: string; checked: boolean }[] = [
        { label: 'Ascending', checked: true },
        { label: 'Descending', checked: false },
    ];
    selectedOption: string = '';
    isListVisible: boolean = false;

    toggleSortingList(): void {
        this.isListVisible = !this.isListVisible;
    }

    selectOption(option: { label: string; checked: boolean }) {
        this.options.forEach((opt) => {
            // opt.clicked === option.clicked
            if (opt === option) {
                opt.checked = true;
                this.selectedOption = opt.label;
            } else {
                opt.checked = false;
            }
        });
    }

    // filtering
    toggleFilteringList(): void {
        this.isListVisible = !this.isListVisible;
    }

    // layout
    toggleLayoutList(): void {
        this.isListVisible = !this.isListVisible;
    }
}
