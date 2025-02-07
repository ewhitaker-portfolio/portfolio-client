import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'main-root',
    imports: [RouterLink, RouterLinkActive, RouterOutlet],
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    animations: [
        trigger('display', [
            transition(':enter', [
                animate('.5s ease-in', keyframes([
                    style({
                        opacity: 0,
                        transform: 'translateX(-200px)',
                        offset: 0
                    }),
                    style({
                        opacity: 0.5,
                        transform: 'translateX(0)',
                        offset: .5
                    }),
                    style({
                        opacity: 1,
                        transform: 'translateX(0)',
                        offset: 1
                    }),
                ]))
            ]),
            transition(':leave', [
                animate('.5s ease-in', keyframes([
                    style({
                        opacity: 1,
                        transform: 'translateX(0)',
                        offset: 0
                    }),
                    style({
                        opacity: 0.5,
                        transform: 'translateX(0)',
                        offset: 0.5
                    }),
                    style({
                        opacity: 0,
                        transform: 'translateX(-200px)',
                        offset: 1
                    }),
                ]))
            ])
        ])
    ]
})
export class MainComponent {
    open = true;
}
