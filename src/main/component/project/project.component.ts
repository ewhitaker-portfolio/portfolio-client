import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'main-project',
    imports: [RouterOutlet],
    templateUrl: './project.component.html',
    styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {
    constructor(
        public router: Router,
        public route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.router.navigate(['lox'], { relativeTo: this.route });
    }
}
