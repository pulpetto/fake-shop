import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {
    // sortingOption: string = 'Ascending';
    // // if array empty show all
    // filteringOption: string[] = [];
    // layoutOption: string = '4-col';

    options: { label: string; checked: boolean }[] = [
        { label: 'Ascending', checked: true },
        { label: 'Descending', checked: false },
    ];
    selectedOption: string = '';
    isListVisible: boolean = false;

    toggleList() {
        this.isListVisible = !this.isListVisible;
    }

    selectOption(option: { label: string; checked: boolean }) {
        this.options.forEach((opt) => {
            if (opt === option) {
                opt.checked = true;
                this.selectedOption = opt.label;
            } else {
                opt.checked = false;
            }
        });
    }

    // click sorting toggle borderblck
}
