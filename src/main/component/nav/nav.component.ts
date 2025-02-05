import { Component } from '@angular/core';

class NavItem {
    constructor(
        public label: string,
        public width: number,
        public height: number,
        public path: string
    ) {
    }
}

@Component({
    selector: 'main-nav',
    imports: [],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css'
})
export class NavComponent {
    items: NavItem[] = [
        new NavItem(
            "Home", 18, 10,
            "m5.668 10-5-5 5-5 1.187 1.188L3.022 5.02l3.813 3.812L5.668 10Zm6.667 0-1.188-1.188L14.98 4.98l-3.812-3.812L12.335 0l5 5-5 5Z"
        ),
        new NavItem(
            "Projects", 18, 10,
            "m5.668 10-5-5 5-5 1.187 1.188L3.022 5.02l3.813 3.812L5.668 10Zm6.667 0-1.188-1.188L14.98 4.98l-3.812-3.812L12.335 0l5 5-5 5Z"
        )
    ];
}
