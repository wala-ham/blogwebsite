import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  constructor(private act :ActivatedRoute,private _auth : AuthService,private data : DataService){}
  
  articles :any;
  id:any;
  author : any;
  
  ngOnInit(): void {
      this.id=this.act.snapshot.paramMap.get('id');
      this._auth.getById(this.id)
      .subscribe((res)=>{
        this.author=res;
        console.log(this.author);
        
      }
      );
      // get all the articles of the user with the given id
      this.data.getArticleByIdAuthor(this.id).subscribe((res)=>{
        this.articles=res;
      },err=>{console.log(err);
      })

  }
}
