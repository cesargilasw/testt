import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  linkOptions = [
    //{title: 'Home Page', url:'/', class: ''},
    {title: 'Login page', url:'/login', class: ''},
  ]
  constructor() { }

  ngOnInit() {
  }

}
