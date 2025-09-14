import { Component } from '@angular/core';
import { Posts } from "../../components/posts/posts";
import { CommonModule } from '@angular/common';
import { Sidebar } from "../../components/sidebar/sidebar";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Posts, CommonModule, Sidebar],
  templateUrl: './home.html',
  styleUrl: './home.css',

})
export class Home {
  posts = [
    {id: 1, title: 'First Post', content: 'This is the content of the first post.', imageUrl: 'https://placehold.co/800x500'},
    {id: 2, title: 'Second Post', content: 'This is the content of the second post.', imageUrl: 'https://placehold.co/800x500'},
    {id: 3, title: 'Third Post', content: 'This is the content of the third post.', imageUrl: 'https://placehold.co/800x500'}
  ]
}
