import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enemy-tooltip',
  templateUrl: './enemy-tooltip.component.html',
  styleUrls: ['./enemy-tooltip.component.css']
})
export class EnemyTooltipComponent implements OnInit {

  tooltip: string = "";
  left: number = 0;
  top: number = 0;

  constructor() {}

  ngOnInit(): void {

  }

}
