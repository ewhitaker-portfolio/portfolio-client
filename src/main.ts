import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './main/main.config';
import { MainComponent } from './main/main.component';

bootstrapApplication(MainComponent, config)
    .catch((err) => console.error(err));
