import { Routes } from '@angular/router';
import { ProjectComponent } from './component/project/project.component';
import { ResumeComponent } from './component/resume/resume.component';

export const routes: Routes = [
    {
        path: 'resume',
        component: ResumeComponent,
    },
    {
        path: 'projects',
        component: ProjectComponent
    },
    { path: '', redirectTo: '/projects', pathMatch: 'full' }
];
