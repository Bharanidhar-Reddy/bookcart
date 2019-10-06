import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import {BookService} from '../book.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  constructor(private svc :BookService) { }
  b:Data=this.svc.ref;;
  ngOnInit() {
    console.log(this.b);
  }

}
