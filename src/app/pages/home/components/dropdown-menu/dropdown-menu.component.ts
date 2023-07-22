import {
    Component,
    Input,
    Output,
    EventEmitter,
    ElementRef,
    ViewChild,
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
    @Output() gridLayoutClassNameEmit = new EventEmitter<string>();

    @ViewChild('menuElement') menuElement!: ElementRef;

    selectedOption: string = '';
    isListVisible: boolean = false;

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

        this.functionality(option);
    }

    // individual functionality
    functionality(option: { label: string; checked: boolean }) {
        if (option.label === '4 columns') {
            this.gridLayoutClassNameEmit.emit('grid-cols-4');
        }

        if (option.label === '3 columns') {
            this.gridLayoutClassNameEmit.emit('grid-cols-3');
        }

        if (option.label === '2 columns') {
            this.gridLayoutClassNameEmit.emit('grid-cols-2');
        }
    }
}
