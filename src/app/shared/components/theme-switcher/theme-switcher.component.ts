import { ThemeService } from './../../../core/services/theme.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss'
})
export class ThemeSwitcherComponent {

  themeService:  ThemeService = inject(ThemeService);

  toggleTheme() {
    this.themeService.updateDarkMode();
  }

  isDarkMode(): boolean {
    return this.themeService.darkModeSignal() === 'dark';
  }
}
