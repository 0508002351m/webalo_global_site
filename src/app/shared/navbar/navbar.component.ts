import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nav_titles:any[]=[
    {title:"Platform"},
    {title:"Industries"},
    {title:"Use Cases"},
    {title:"Partners"},
  ]
  nav_about:any[]=[
    {title:"About"},
    {title:"Resources"},
    {title:"Press & Events"},
    {title:"Careers"},
    {title:"Blog"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
