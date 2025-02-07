import { ApplicationConfig, Injectable, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterStateSnapshot, TitleStrategy } from '@angular/router';

import { routes } from './main.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class RouterTitleStrategy extends TitleStrategy {
    constructor(
        public readonly title: Title
    ) {
        super();
    }

    override updateTitle(snapshot: RouterStateSnapshot): void {
        const title = this.buildTitle(snapshot);
        if (title !== undefined) {
            this.title.setTitle(`Portfolio | ${title}`);
        }
    }
}

export const config: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        { provide: TitleStrategy, useClass: RouterTitleStrategy },
        provideAnimations()
    ]
};
