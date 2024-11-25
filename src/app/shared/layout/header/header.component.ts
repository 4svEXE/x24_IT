import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { SvgIconsInterface, SvgService } from '../../../core/services/svg.service';
import { ThemeSwitcherComponent } from '../../components/theme-switcher/theme-switcher.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavigationComponent, ThemeSwitcherComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  svg!: SvgIconsInterface;

  constructor(private SVG:SvgService) {
    this.svg = this.SVG.loadSvg();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
