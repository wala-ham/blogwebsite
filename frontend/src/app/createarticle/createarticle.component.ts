import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createarticle',
  templateUrl: './createarticle.component.html',
  styleUrls: ['./createarticle.component.css']
})
export class CreatearticleComponent {
  //Injection de service 'DataService'
  constructor(private _auth : AuthService,
    private data:DataService,
    private router :Router){}
  article :any = {
    title:'',
    content:'',
    tags :[],
    description:''
  }
  tag : any='';

  image : any;
  select(e:any){
    this.image=e.target.files[0];
  }
 
  create(){
    let myFormData= new FormData()
    myFormData.append('title' , this.article.title );
    myFormData.append('content' , this.article.content );
    myFormData.append('tags' , this.article.tags.toString() );
    myFormData.append('description' , this.article.description );
    myFormData.append('image' , this.image );
    myFormData.append('idAuthor' , this._auth.getAuthorDataFromToken()._id );

    this.data.create(myFormData)
    .subscribe(res =>{
      this.router.navigate(['/home']);
    }, err=>{
      console.log(err)
    }
    );
  }

}
