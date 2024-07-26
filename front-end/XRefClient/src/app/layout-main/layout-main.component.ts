import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// components
import { MainHeaderComponent } from './main-header/main-header.component'
import { MainFooterComponent } from './main-footer/main-footer.component'

@Component({
  selector: 'app-layout-main',
  standalone: true,
  templateUrl: './layout-main.component.html',
  styleUrl: './layout-main.component.scss',
  imports: [
    // @angular
    RouterOutlet,
    // components
    MainHeaderComponent,
    MainFooterComponent
  ],
})

export class LayoutMainComponent {

}
