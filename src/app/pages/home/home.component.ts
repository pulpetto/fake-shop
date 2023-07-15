import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {
    sortingOptions: { label: string; checked: boolean }[] = [
        { label: 'Ascending', checked: true },
        { label: 'Descending', checked: false },
    ];

    filteringOptions: { label: string; checked: boolean }[] = [
        { label: 'jewelery', checked: false },
        { label: 'electronics', checked: false },
        { label: "men's clothing", checked: false },
        { label: "women's clothing", checked: false },
    ];

    layoutOptions: { label: string; checked: boolean }[] = [
        { label: '4 columns', checked: true },
        { label: '3 columns', checked: false },
        { label: '2 columns', checked: false },
    ];

    // emmited event that if if one is opened another are closed
    // control state if they are opened (isVisible) | maybe use foreach
}
