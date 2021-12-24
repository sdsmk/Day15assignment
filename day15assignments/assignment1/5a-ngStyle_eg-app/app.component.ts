import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})


export class AppComponent {
background:string  
color:string
size:number
visible:boolean
displayText:string
constructor() { 
    this.background='';
    this.color = 'pink';
    this.size = 16;
    this.displayText = 'show-class';
    this.visible = true;
  }
  
  toggle() {
    this.visible = !this.visible;
    this.displayText = this.visible ? 'show-class' : 'hide-class';
  }

}