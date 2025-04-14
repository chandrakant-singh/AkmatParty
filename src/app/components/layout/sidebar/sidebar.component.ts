import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  selectedTab = 'tab1';
  isSidebarOpen = true;
  isMobileView = false;

  ngOnInit() {
    this.checkViewport();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkViewport();
  }

  checkViewport() {
    this.isMobileView = window.innerWidth < 768;
    this.isSidebarOpen = !this.isMobileView;
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
    if (this.isMobileView) this.isSidebarOpen = false; // auto close on mobile after selecting
  }
}
