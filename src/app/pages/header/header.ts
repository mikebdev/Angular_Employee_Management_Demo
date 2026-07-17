import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;

  }

}
