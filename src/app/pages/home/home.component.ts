import {
    Component,
    AfterViewInit,
    ViewChildren,
    QueryList,
    HostListener,
    // Output,
    // EventEmitter,
} from '@angular/core';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
    @ViewChildren(DropdownMenuComponent)
    dropdownMenus!: QueryList<DropdownMenuComponent>;

    ngAfterViewInit(): void {
        this.dropdownMenus.forEach((menu, index) => {
            menu.isOpen.subscribe(() => {
                this.closeAllMenusExcept(index);
            });
        });
    }

    closeAllMenusExcept(index: number) {
        this.dropdownMenus.forEach((menu, i) => {
            if (i !== index) {
                menu.close();
            }
        });
    }
    // MAYBE FOR EACH DROPDOWN-MENU COMPONENT and then access isVisible (ask GPT)
    // make the property isVisible here for each dropdown, all of 3 into array and then foreach hide dropdown and show on that that was clicked (event emmiter)
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

    @HostListener('document:click', ['$event'])
    onClickOutside(event: MouseEvent) {
        if (!this.isClickInsideDropdownMenu(event)) {
            this.dropdownMenus.forEach((menu) => menu.close());
        }
    }

    private isClickInsideDropdownMenu(event: MouseEvent): boolean {
        return this.dropdownMenus.some(
            (menu) =>
                menu.menuElement?.nativeElement?.contains(event.target) || false
        );
    }
}
