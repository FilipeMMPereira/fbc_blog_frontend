import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class AdminLayout implements OnInit {
  isSidebarVisible = true;

  ngOnInit() {
    // Carrega o script do Bootstrap quando o componente é inicializado
    this.loadBootstrapScript();
    // Esconde a sidebar em telas pequenas inicialmente
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  private checkScreenSize() {
    this.isSidebarVisible = window.innerWidth >= 992;
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  private loadBootstrapScript() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js';
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);
  }
}
