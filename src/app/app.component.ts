import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  todoArray = [];

  addTodo(value): void{
    this.todoArray.push(value);
    console.log(this.todoArray);
    value = ' ';
  }

  clear(value): void{
    value.value = ' ';
  }


}






//
// todoArray = []; addTodo(value){
//   this.todoArray.push(value);
//   console.log(this.todos);
// }

