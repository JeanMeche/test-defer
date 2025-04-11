import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Defered } from './defered';

@Component({
  selector: 'app-root',
  imports: [Defered],
  template: `
    @defer (on interaction) {
      <app-defered/>
    } @placeholder {
      <div>Placeholder</div>
    }
  `,
})
export class App {
  title = 'test-defer';
}
