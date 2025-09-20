import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  stats = {
    totalPosts: 0,
    totalCategories: 0,
    totalComments: 0
  };
  constructor(private cdr: ChangeDetectorRef) { }

  recentPosts: any[] = [];

  async ngOnInit() {
    // TODO: Implementar chamadas à API para buscar estatísticas
    // Por enquanto, usando dados mockados
    this.stats = {
      totalPosts: 15,
      totalCategories: 5,
      totalComments: 45
    };

    this.recentPosts = [
      {
        id: 1,
        title: 'Post Recente 1',
        createdAt: new Date(),
        category: 'Tecnologia'
      },
      {
        id: 2,
        title: 'Post Recente 2',
        createdAt: new Date(),
        category: 'Programação'
      }
    ];
    this.cdr.detectChanges();
  }
}
