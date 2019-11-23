import { Component, OnInit } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.headerAnimStart();

    
  }

  headerAnimStart() {
    $('.header-container').addClass("from-bottom-activate");
    setTimeout(function () {
      $('.brandon-header').addClass("left-activate");
      setTimeout(function () {
        $('.laniog-header').addClass("left-activate");
      }, 300)
    }, 700)
  }

  navViewCheck() {
    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();

      $(".contact-two-viewport").each(function () {
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight)) {

          $('.projects-circle').removeClass("active-circle");
          $('.projects-nav').removeClass("active-nav");

        } else {
          $('.contact-circle').removeClass("active-circle");
          $('.contact-nav').removeClass("active-nav");

        }
      });
    });
  }




}
