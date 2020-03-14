import { Component } from '@angular/core';
import { MatButton, MatToolbar } from '@angular/material'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-angular';

  button(){
    alert("Clicked")
  }
}
