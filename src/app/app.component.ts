import { Component, inject } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'x24_IT';
  baseHref = environment.baseHref;

  themeService: ThemeService = inject(ThemeService);
}
