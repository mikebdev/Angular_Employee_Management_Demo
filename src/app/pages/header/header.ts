import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
// import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;

  }

}
