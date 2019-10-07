import { Component, OnInit } from '@angular/core';

import { Person } from '../../../models/person.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  persons: Person[];
  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('persons') === undefined ) {
       this.persons = [];
    } else {
      this.persons = JSON.parse(localStorage.getItem('persons'));
    }
  }

}
