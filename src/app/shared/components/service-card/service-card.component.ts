import { Component, Input } from '@angular/core';
import { SvgIconsInterface, SvgService } from '../../../core/services/svg.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  @Input() title: string = 'title';
  @Input() price: number = 999;
  @Input() description: string = 'description';
  @Input() features: string[] = ['feature1', 'feature2', 'feature3'];

  svg!: SvgIconsInterface;

  constructor(private SVG:SvgService) {
    this.svg = this.SVG.loadSvg();
  }
}
