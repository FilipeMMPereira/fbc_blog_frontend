import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Sidebar } from "../../components/sidebar/sidebar";
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [Sidebar, CommonModule],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details {
  post: { id: number; title: string; content: string; imageUrl: string; slug: string } = {
    id: 0,
    title: '',
    content: '',
    imageUrl: '',
    slug: ''
  };


  constructor(private cdr: ChangeDetectorRef, private route: ActivatedRoute) { }

  async loadPost() {
    try {
      const slug = this.route.snapshot.paramMap.get('slug');
      const response = await fetch('http://localhost:8080/public/post/'+ slug);
      if (response.ok) {
        const post = await response.json();

        this.post = {
          id: post.id,
          title: post.title,
          content: post.content,
          imageUrl: "http://localhost:8080/uploads/" + post.image,
          slug: post.slug
        };
      }
      this.cdr.detectChanges();
    } catch (error) {
      console.error('Erro ao carregar posts:', error);
      alert('Erro ao carregar posts');
    }
  }



  ngOnInit() {
    this.loadPost();
  }
}
