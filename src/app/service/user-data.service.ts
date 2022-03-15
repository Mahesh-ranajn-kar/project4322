import { Injectable } from '@angular/core';

export type Comment = {
  comment: string,
  author: string
}

@Injectable({
  providedIn: 'root'
})
export class UserDataService { 

  constructor() {}

  getUserComments(): Comment[]{
    let comments: Comment[] = [];
    for(let i = 0; i < 10; i++){
      comments.push({
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit reprehenderit voluptatem rem vel reiciendis animi porro non perferendis minima.",
        author: "Lorem ipsum dolor"
      })
    }
    return comments;
  }
}
