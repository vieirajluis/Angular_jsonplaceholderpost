import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  posts:Post[];
  isEdit:boolean=false;

  constructor(private dataService:DataService) { 
    console.log('constructor ran...');
  }

  ngOnInit() {
    console.log('ngOnInit ran...');
    this.name='Joao Luis';
    this.age=99;
    this.email='myemail@gmail.com';
    this.address={
      street:'Street', 
      city:'Toronto',
      state:'Ontario'
    }
    this.hobbies=['Write code','Watch movies','Listen music'];
    this.hello=true;
    this.dataService.getPosts().subscribe((posts)=> {
      //console.log(posts);
      this.posts=posts;
    });
  }

  onClick()
  {
    this.name='Luis Vieira';
    this.hobbies.push('New hobby');
    console.log('Hello');
  }

  toogleEdit()
  {
    this.isEdit =!this.isEdit;
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    console.log(hobby);
    for(let i=0;i<this.hobbies.length;i++)
    {
      if(this.hobbies[i]==hobby)
      {
        this.hobbies.splice(i,1);
      }
    }
  }

}
  interface Address{
    street:string,
    city:string,
    state:string
  }

  interface Post{

    id:number,
    title:string,
    body:string,
    userId:number
  }

