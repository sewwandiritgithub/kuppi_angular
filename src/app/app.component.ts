import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kuppi';

  myimage:String = "assets/images/png-transparent-abstract-blue-background-wave.png";

  constructor() {}

  ngOnInit () {}
}


