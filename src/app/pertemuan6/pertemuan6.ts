import { Component, inject } from '@angular/core';
import { Post } from '../services/post';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  selector: 'app-pertemuan6',
  styleUrl: './pertemuan6.css',
  templateUrl: './pertemuan6.html',
})
export class Pertemuan6 {
  private postService = inject(Post);
  posts$ = this.postService.getPosts().pipe();
}
