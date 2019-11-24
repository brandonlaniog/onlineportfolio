import { Component, OnInit } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.musicAnimStart();
  }

  musicAnimStart(){
  $('#inverse').addClass("from-bottom-activate");
    setTimeout(function () {
      $('#heartbeat').addClass("from-bottom-activate");
      setTimeout(function () {
        $('#sentient').addClass("from-bottom-activate");
        setTimeout(function () {
          $('#resurgence').addClass("from-bottom-activate");
          setTimeout(function () {
            $('#the-runner').addClass("from-bottom-activate");
          }, 300)
        }, 300)
      }, 300)
    }, 300)
  }

}
