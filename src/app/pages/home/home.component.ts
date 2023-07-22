import {
    Component,
    AfterViewInit,
    OnInit,
    ViewChildren,
    QueryList,
    HostListener,
} from '@angular/core';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { ShopService } from 'src/app/services/shop.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit, OnInit {
    // individual properties
    gridLayoutClassName = 'grid-cols-4';
    setLayout(e: string) {
        this.gridLayoutClassName = e;
        console.log(e);
    }
    // ---------------------

    products = [];

    // eslint-disable-next-line no-unused-vars
    constructor(private ShopServiceAPI: ShopService) {}

    ngOnInit() {
        this.ShopServiceAPI.getAllProducts().subscribe((data: any) => {
            this.products = data;
        });
    }

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
