import { Component, OnInit } from '@angular/core';

interface Comment{
  comment: string,
  author: string
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  comments: Comment[] = []; 

  constructor() { }

  ngOnInit(): void {

    for(let i = 0; i < 10; i++){
      this.comments.push({
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit reprehenderit voluptatem rem vel reiciendis animi porro non perferendis minima.",
        author: "Lorem ipsum dolor"
      })
    }
  }

}
