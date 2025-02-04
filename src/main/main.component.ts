import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'main-root',
    imports: [RouterOutlet],
    templateUrl: './main.component.html',
    styleUrl: './main.component.css'
})
export class MainComponent {
    title = 'portfolio-client';
}
