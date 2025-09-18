import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
    posts = [
    {id: 1, title: 'First Post', content: 'This is the content of the first post.', imageUrl: 'https://placehold.co/800x500'},
    {id: 2, title: 'Second Post', content: 'This is the content of the second post.', imageUrl: 'https://placehold.co/800x500'},
    {id: 3, title: 'Third Post', content: 'This is the content of the third post.', imageUrl: 'https://placehold.co/800x500'}
  ]
}
