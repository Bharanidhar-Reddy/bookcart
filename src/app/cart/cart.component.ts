import { Component, OnInit } from '@angular/core';
import { BookService} from '../book.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  constructor(private svc:BookService) { }
  books=this.svc.books;
  total:number=0;
  ngOnInit() {
    this.books.forEach(b => {
      this.total+=b.price;
    });
  }
  final(){
    alert("Your order has been succesfully placed");
    window.location.reload();
  }
}
