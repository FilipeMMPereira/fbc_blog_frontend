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
  posts: { id: number, title: string, content: string, imageUrl: string, slug: string, createdAt: string, category: { id: number, name: string, slug: String } }[] = [];
  categories: { id: number, name: string, slug: String }[] = [];
  comments: { id: number, content: string, userId: number, postId: number, createdAt: string, user: { id: number, name: string } }[] = [];

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
      this.stats.totalCategories = this.categories.length;
      this.cdr.detectChanges();
    } catch (error) {
      console.error('Erro ao carregar categorias:', error);
      alert('Erro ao carregar categorias');
    }
  }

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
          slug: post.slug,
          category: { id: post.category.id, name: post.category.name, slug: post.category.slug },
          createdAt: post.createdAt
        }));
        this.stats.totalPosts = this.posts.length;
        console.log(this.posts);
      }
      this.cdr.detectChanges();
    } catch (error) {
      console.error('Erro ao carregar posts:', error);
      alert('Erro ao carregar posts');
    }
  }

    async loadComments() {
    try {

      const response = await fetch('http://localhost:8080/public/comments');
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.comments = data.map((comment: any) => ({
          id: comment.id,
          content: comment.content,
          userId: comment.userId,
          postId: comment.postId,
          user: { id: comment.user.id, name: comment.user.name },
          createdAt: comment.createdAt

        }));
      }
      this.stats.totalComments = this.comments.length;
      this.cdr.detectChanges();
    } catch (error) {
      console.error('Erro ao carregar comentarios:', error);
      alert('Erro ao carregar comentarios');
    }
  }

  truncateText = (text: String, limit: number = 300) => {
    if (!text) return '';
    return text.length > limit ? text.slice(0, limit) + '...' : text;
  };



  ngOnInit() {
    this.loadPosts();
    this.loadCategories();
    this.loadComments();
  }

}
