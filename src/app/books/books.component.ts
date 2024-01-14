import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
 
public BookList=["Angular in Action","Node.js Design Patterns","Android Cookbook","Big Data: A Revolution","Applied Artificial Intelligence: A Handbook"];

}
