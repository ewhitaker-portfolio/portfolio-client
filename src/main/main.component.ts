import { Component } from '@angular/core';
import { NavComponent } from './component/nav/nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'main-root',
    imports: [RouterOutlet, NavComponent],
    templateUrl: './main.component.html',
    styleUrl: './main.component.css'
})
export class MainComponent {
}
