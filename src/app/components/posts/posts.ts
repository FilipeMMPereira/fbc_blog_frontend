import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class Posts {
  @Input() post!: {id: number, title: string, content: string, imageUrl: string}
}
