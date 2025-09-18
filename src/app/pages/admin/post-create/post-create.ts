import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Category {
  id: number;
  name: string;
  description: string;
  slug: string;
}

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-create.html',
  styleUrl: './post-create.css'
})
export class PostCreate implements OnInit {
  imagePreviewUrl: string | null = null;
  postData = {
    title: '',
    content: '',
    categoryId: 0
  };

  imageFile: File | null = null;
  categories: Category[] = [];

  ngOnInit() {
    this.loadCategories();
  }

  async loadCategories() {
    try {
      const response = await fetch('http://localhost:8080/public/category/');
      if (response.ok) {
        this.categories = await response.json();
      }
    } catch (error) {
      console.error('Erro ao carregar categorias:', error);
      alert('Erro ao carregar categorias');
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageFile = file;

      // Criar URL para preview da imagem
      if (this.imagePreviewUrl) {
        URL.revokeObjectURL(this.imagePreviewUrl);
      }
      this.imagePreviewUrl = URL.createObjectURL(file);
    }
  }

  ngOnDestroy() {
    // Limpar a URL do preview quando o componente for destruído
    if (this.imagePreviewUrl) {
      URL.revokeObjectURL(this.imagePreviewUrl);
    }
  }

  async onSubmit() {
    try {
      if (!this.imageFile) {
        alert('Por favor, selecione uma imagem');
        return;
      }

      const token = localStorage.getItem('token');
      if (!token) {
        alert('Você precisa estar logado para criar um post');
        return;
      }

      // Criar FormData para enviar o arquivo
      const formData = new FormData();
      formData.append('title', this.postData.title);
      formData.append('content', this.postData.content);
      formData.append('image', this.imageFile);
      formData.append('categoryId', this.postData.categoryId.toString());

      const response = await fetch('http://localhost:8080/public/post/create', {
        method: 'POST',
        // headers: {
        //   'Authorization': `Bearer ${token}`
        // },
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        alert('Post criado com sucesso!');
        // Limpar o formulário
        this.postData = {
          title: '',
          content: '',
          categoryId: 0
        };
        this.imageFile = null;
      } else {
        alert('Erro ao criar post: ' + data.error);
      }
    } catch (error) {
      console.error('Erro ao criar post:', error);
      alert('Erro ao criar post');
    }
  }
}
