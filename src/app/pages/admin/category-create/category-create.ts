import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category-create.html',
  styleUrl: './category-create.css'
})
export class CategoryCreate {
  categoryData = {
    name: '',
    description: '',
  };

  constructor(private cdr: ChangeDetectorRef) { }

  generateSlug(name: string) {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  async onSubmit() {
    try {
      // Gerar o slug a partir do nome

      const token = localStorage.getItem('token');
      if (!token) {
        alert('Você precisa estar logado para criar uma categoria');
        return;
      }

      const response = await fetch('http://localhost:8080/public/category/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.categoryData)
      });

      const data = await response.json();

      if (response.ok) {
        alert('Categoria criada com sucesso!');
        // Limpar o formulário
        this.categoryData = {
          name: '',
          description: '',
        };
        this.cdr.detectChanges();
      } else {
        alert('Erro ao criar categoria: ' + data.error);
      }
    } catch (error) {
      console.error('Erro ao criar categoria:', error);
      alert('Erro ao criar categoria');
    }
  }
}
