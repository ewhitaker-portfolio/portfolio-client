import { Routes } from '@angular/router';
import { ProjectComponent } from './component/project/project.component';
import { ResumeComponent } from './component/resume/resume.component';
import { LoxInterpreterComponent } from './component/project/component/lox-interpreter/lox-interpreter.component';

export const routes: Routes = [
    {
        path: 'resume',
        title: 'Resume',
        component: ResumeComponent,
    },
    {
        path: 'projects',
        title: 'Projects',
        component: ProjectComponent,
        children: [
            {
                path: 'lox',
                title: 'Lox',
                component: LoxInterpreterComponent
            }
        ]
    },
    { path: '', redirectTo: '/projects', pathMatch: 'full' }
];
