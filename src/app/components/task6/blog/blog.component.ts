import { Component, OnInit } from '@angular/core';
import { UserDataService, Comment } from 'src/app/service/user-data.service';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  comments: Comment[] = []; 

  constructor(private userData:UserDataService) {
    this.comments = userData.getUserComments()
   }

  ngOnInit(): void {}

}
