import { Component, OnInit } from '@angular/core';
import {Data} from '../data';
import {Bookdata} from '../bookdata';
import {BookService} from '../book.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private svc :BookService) { }
  books=Bookdata;
  ngOnInit() {
  }
 onClick(bk:Data){
   this.svc.ref=bk;
 }
}
