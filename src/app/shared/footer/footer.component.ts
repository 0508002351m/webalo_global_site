import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  nav_titles:any[]=[
    {title:"partners"},
    {title:"Use Cases"},
    {title:"Industries"},
    {title:"Platform"},
  ]
  nav_about:any[]=[
    {title:"About Webalo"},
    {title:"Resources"},
    {title:"Press & Events"},
    {title:"Careers"},
    {title:"Blog"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
