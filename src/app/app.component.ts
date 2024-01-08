import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DEFENSE  OF  THE  ANCIENTS';

  navLinks: any[];
  activeLinkIndex: number = -1;

  constructor(private router: Router) {
    this.navLinks = [
      // {
      //   label: 'D&D Recap',
      //   link: './dnd_recap',
      //   index: 0
      // },
      {
        label: 'Create Game',
        link: './game_creation',
        index: 0
      }, {
        label: 'Decode Game',
        link: './decode_game',
        index: 1
      }, {
      //   label: 'Dashboard',
      //   link: './dashboard',
      //   index: 3
      // }, {
        label: 'Players',
        link: './players',
        index: 2
      }
    ]
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
