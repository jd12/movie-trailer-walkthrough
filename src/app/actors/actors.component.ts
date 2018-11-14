import { Component, OnInit } from '@angular/core';

import { AVENGERS_ACTORS } from './mock-actors';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  
  actors = AVENGERS_ACTORS;

  constructor() { }

  ngOnInit() {
  }

}
