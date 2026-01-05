import { Component } from '@angular/core';
import { IonApp, IonHeader, IonRouterOutlet } from '@ionic/angular/standalone';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonHeader, IonRouterOutlet, HeaderComponent],
})
export class AppComponent {
  constructor() {}
}
