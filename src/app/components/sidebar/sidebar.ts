import { ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  posts: { id: number, title: string, content: string, imageUrl: string, slug: String }[] = [];
  categories: { id: number, name: string, slug: String }[] = [];

  constructor(private cdr: ChangeDetectorRef) { }

  async loadPosts() {
    try {
      const response = await fetch('http://localhost:8080/public/post/');
      if (response.ok) {
        const data = await response.json();
        this.posts = data.map((post: any) => ({
          id: post.id,
          title: post.title,
          content: this.truncateText(post.content),
          imageUrl: "http://localhost:8080/uploads/" + post.image,
          slug: post.slug
        }));
      }
      this.cdr.detectChanges();
    } catch (error) {
      console.error('Erro ao carregar categorias:', error);
      alert('Erro ao carregar categorias');
    }
  }

  async loadCategories() {
    try {
      const response = await fetch('http://localhost:8080/public/category/');
      if (response.ok) {
        const data = await response.json();
        this.categories = data.map((category: any) => ({
          id: category.id,
          name: category.name,
          slug: category.slug
        }));
      }
      this.cdr.detectChanges();
    } catch (error) {
      console.error('Erro ao carregar categorias:', error);
      alert('Erro ao carregar categorias');
    }
  }
  truncateText = (text: String, limit: number = 300) => {
    if (!text) return '';
    return text.length > limit ? text.slice(0, limit) + '...' : text;
  };


  ngOnInit() {
    this.loadPosts();
    this.loadCategories();
  }
}
