import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  UserArray: any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  Fname: String= "";
  Password: String = "";
  Email: String ="";
  Phone_number: String ="";
  Address: String ="";
  Role: String ="";
  currentUserID ="";

  constructor() {}

  ngOnInit() {
    
  }
  
  
 
}
