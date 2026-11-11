import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface PostModel {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Service()
export class Post {
  private htpp = inject(HttpClient);

  getPosts(): Observable<PostModel[]> {
    return this.htpp.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
