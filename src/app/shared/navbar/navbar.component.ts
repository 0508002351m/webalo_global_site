import { Component, OnInit } from '@angular/core';
import * as $ from "jQuery";

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
      $(window).scroll(function(){
        var scroll:any = $(window).scrollTop();
        if (scroll > 50) {
          $("nav").css("background" , "#303030");
          $(".right_side").css("transform" , "translate(10px,-10px)");
          $(".logo").css("transform" , "translate(-10px,-10px)")

        }
        else{
          $("nav").css("background" , "transparent");
          $(".right_side").css("transform" , "translate(-5px,5px)");
          $(".logo").css("transform" , "translate(-5px,5px)")
        }
      })
  }

}
