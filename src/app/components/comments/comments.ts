import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments',
  imports: [FormsModule, CommonModule],
  templateUrl: './comments.html',
  styleUrl: './comments.css'
})
export class Comments {
  @Input() postId!: number;
  commentText: string = '';
  comments: { id: number, content: string, userId: number, postId: number, createdAt: string, user: { id: number, name: string } }[] = [];

  constructor(private cdr: ChangeDetectorRef, private router: Router) { }

  async publishComment() {
    const token = localStorage.getItem('token');

    // redireciona para login se nao tiver token
    if (!token) {
      const userConsent = confirm('Você precisa estar logado para comentar. Deseja ser redirecionado para a página de login?');
      if (userConsent) {
        this.router.navigate(['/login']);
      }
      return;
    }

    // Extrair o ID do usuário do token
    const match = token.match(/^user_(\d+)_/);
    if (!match) {
      // alert('Token inválido, faça login novamente');
      this.router.navigate(['/login']);
      return;
    }

    const userId = match[1];

    try {
      const response = await fetch('http://localhost:8080/public/comments/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,
          content: this.commentText,
          postId: this.postId
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert('Comentário publicado com sucesso!');
        this.commentText = '';
        this.loadComments();
      } else {
        alert('Erro ao publicar comentário: ' + data.error);
      }
      this.cdr.detectChanges();
    } catch (error) {
      console.error('Erro ao publicar comentário:', error);
      alert('Erro ao publicar comentário');
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
      this.cdr.detectChanges();
    } catch (error) {
      console.error('Erro ao carregar comentarios:', error);
      alert('Erro ao carregar comentarios');
    }
  }



  ngOnInit() {
    this.loadComments();
  }

}
