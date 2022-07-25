import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    $(window).scroll(function(){
      var scroll:any = $(window).scrollTop();
      if ((scroll > 90) && (scroll < 920)) {
        $(".blue_txt").addClass("visible animate__animated animate__fadeIn animate__slow");
      }
      else if (scroll < 650) {
        $(".large_txt").addClass("visible animate__animated animate__fadeIn animate__slow");
      }
})
  }}
