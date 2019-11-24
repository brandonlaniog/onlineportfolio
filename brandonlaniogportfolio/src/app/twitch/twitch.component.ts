import { Component, OnInit } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.css']
})
export class TwitchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.twitchAnimStart();
  }

  twitchAnimStart() {
    $('.twitch-title').addClass("from-bottom-activate");
    setTimeout(function () {
      $('.album-text').addClass("from-bottom-activate");
    }, 500)
  }

}
