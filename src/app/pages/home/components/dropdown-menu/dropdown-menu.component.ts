import {
    Component,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef,
} from '@angular/core';

@Component({
    selector: 'app-dropdown-menu',
    templateUrl: './dropdown-menu.component.html',
    styleUrls: ['./dropdown-menu.component.css'],
})
export class DropdownMenuComponent {
    @Input() listName: string = '';
    @Input() options: { label: string; checked: boolean }[] = [];
    @Input() multipleOptions: boolean = false;

    @Output() isOpen: EventEmitter<boolean> = new EventEmitter<boolean>();
    //WHY VIEWCHILD
    @ViewChild('menuElement') menuElement!: ElementRef;

    selectedOption: string = '';
    isListVisible: boolean = false;
    elementRef: any;

    // emmit this
    toggleList(): void {
        this.isListVisible = !this.isListVisible;
        this.isOpen.emit(this.isListVisible);
    }

    close() {
        this.isListVisible = false;
    }

    selectOption(option: { label: string; checked: boolean }, e: any) {
        if (!this.multipleOptions) {
            if (option.checked) {
                e.preventDefault();
                return;
            }
        }

        this.options.forEach((opt) => {
            if (opt === option) {
                opt.checked = true;
                this.selectedOption = opt.label;
            } else if (!this.multipleOptions) {
                opt.checked = false;
            }
        });
    }
}
