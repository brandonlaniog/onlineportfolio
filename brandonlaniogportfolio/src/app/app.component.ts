import { Component } from '@angular/core';
import { Router } from '@angular/router';
import $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'brandonlaniogportfolio';

  constructor(private router: Router) { }

  ngOnInit() {

  }

}

