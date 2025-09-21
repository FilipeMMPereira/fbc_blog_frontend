import { Component, ChangeDetectorRef } from '@angular/core';
import { Posts } from "../../components/posts/posts";
import { CommonModule } from '@angular/common';
import { Sidebar } from "../../components/sidebar/sidebar";
import { RouterLink, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Posts, CommonModule, Sidebar, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',

})
export class Home {
  posts: { id: number, title: string, content: string, imageUrl: string, slug:string, createdAt: string, category:{id: number, name: string, slug: String} }[] = [];

  constructor(private cdr: ChangeDetectorRef, private route: ActivatedRoute) { }

  async loadPosts() {
    try {

      const response = await fetch('http://localhost:8080/public/post/');
      if (response.ok) {

        const categorySlug = this.route.snapshot.paramMap.get('slug');
        console.log(categorySlug);
        const data = await response.json();
        this.posts = data.map((post: any) => ({
          id: post.id,
          title: post.title,
          content: this.truncateText(post.content),
          imageUrl: "http://localhost:8080/uploads/" + post.image,
          slug: post.slug,
          category: {id: post.category.id, name: post.category.name, slug: post.category.slug},
          createdAt: post.createdAt
        }));

         if (categorySlug) {
          this.posts = this.posts.filter((post: any) => post.category.slug === categorySlug);
        }

      }
      this.cdr.detectChanges();
    } catch (error) {
      console.error('Erro ao carregar posts:', error);
      alert('Erro ao carregar posts');
    }
  }
  truncateText = (text: String, limit: number = 300) => {
    if (!text) return '';
    return text.length > limit ? text.slice(0, limit) + '...' : text;
  };



  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.loadPosts();

    });

  }

}
