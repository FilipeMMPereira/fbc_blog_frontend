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
  ngOnInit() {
    // Carrega o script do Bootstrap quando o componente é inicializado
    this.loadBootstrapScript();
  }

  toggleSidebar() {
    document.body.classList.toggle('sb-sidenav-toggled');
  }

  private loadBootstrapScript() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js';
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);
  }
}
