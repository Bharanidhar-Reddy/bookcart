import { Injectable } from '@angular/core';
import {Data} from './data';
@Injectable({
  providedIn: 'root'
})

export class BookService {
  
  books:Data[]=[];
    id:number;
    name:string;
    author:string;
    price:number;
    desc:string;
    img:string;
    val:boolean;
    ref:Data/* =new Data(this.id,this.name,this.author,this.price,this.desc,this.img) */;
  constructor() { }

  addbook(b:Data){
    if(this.check(b)){
    this.books.push(b);
    console.log(this.books);}
  }
   check(b) : boolean {
    this.val=true;
    this.books.forEach(bb => {
      if(bb.id==b.id){this.val=false
      alert("Your already have book in your cart");}
    });
    return this.val;
  }
}
