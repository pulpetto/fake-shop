import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {
    sortingOption: string = 'Ascending';

    // if array empty show all
    filteringOption: string[] = [];

    layoutOption: string = 'Ascending';
}
