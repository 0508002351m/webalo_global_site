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
          $("nav").css({"background" : "#303030" , "border-bottom" : "2px solid black","box-shadow" : " 0px 10px 59px -4px rgb(0 0 0 / 36%)"});
          $(".mini_drop").css({"background" : "#303030" , "box-shadow" : " 0px 10px 59px -4px rgb(0 0 0 / 36%)"});
          $(".right_side").css("transform" , "translate(10px,-10px)");
          $(".menu_icon").css("transform" , "translate(10px,-10px)");
          $(".logo").css("transform" , "translate(-10px,-10px)");
          $(".menu").css("background" , "#303030");

        }
        else{
          $("nav").css({"background" : "transparent", "border-bottom":"none","box-shadow" : "none"});
          $(".mini_drop").css({"background" : "transparent","box-shadow" : "none"});
          $(".right_side").css("transform" , "translate(-5px,5px)");
          $(".menu_icon").css("transform" , "translate(-5px,5px)");
          $(".logo").css("transform" , "translate(-5px,5px)");
          $(".menu").css("background" , "transparent");
        }
      })
      $(".menu_icon").click(function () {
          $(".menu").toggleClass("d-block")
      })
  }

}
