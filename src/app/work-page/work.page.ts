import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-work',
    templateUrl: './work.page.html',
    styleUrl: './work.page.scss',
    standalone: true,
    imports: [FooterComponent]
})

export class WorkPage implements OnInit {
    constructor() { }

    ngOnInit() { }
}