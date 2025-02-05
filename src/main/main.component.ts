import { Component } from '@angular/core';
import { NavComponent } from './component/nav/nav.component';
import { ContentComponent } from './component/content/content.component';

@Component({
    selector: 'main-root',
    imports: [NavComponent, ContentComponent],
    templateUrl: './main.component.html',
    styleUrl: './main.component.css'
})
export class MainComponent {
    title = 'portfolio-client';
}
