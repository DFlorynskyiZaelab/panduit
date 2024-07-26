// @angular
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// mat
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-main-header',
  standalone: true,
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss',
  imports: [
    // @angular
    CommonModule,
    // mat
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule
  ]
})

export class MainHeaderComponent {
  hasNotifications = true; // Set this based on your notification logic
  onNotificationClick() {
    // Handle the click event (e.g., mark notifications as read)
    this.hasNotifications = !this.hasNotifications;
  }
}
