import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.page.html',
    styleUrl: './contact.page.scss',
    standalone: true,
    imports: [FooterComponent]
})

export class ContactPage implements OnInit {
    constructor() { }

    ngOnInit() { }
}
