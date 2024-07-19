import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  status = false;

  constructor() { }

  ngOnInit() {
  }

  clickImages() {
    this.status = !this.status;
  }

  clickBackground() {
    this.status = !this.status;
  }

}
