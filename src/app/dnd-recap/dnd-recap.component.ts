import { Component, OnInit } from '@angular/core';
import { DnDRecap } from '../dndRecap';
import { DndrecapService } from '../dndrecap.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-dnd-recap',
  templateUrl: './dnd-recap.component.html',
  styleUrls: ['./dnd-recap.component.css']
})
export class DndRecapComponent implements OnInit {

  constructor(
    private dndRecap: DndrecapService,
    private sanitizer: DomSanitizer
  ) {}

  dndRecaps: DnDRecap[] = [];

  getSafeHtml(recapEntry: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(recapEntry);
  }

  getDnDRecaps(): void {
    this.dndRecap.getAllRecaps().subscribe(recaps => this.dndRecaps = recaps);
  }

  ngOnInit(): void {
    this.getDnDRecaps();
  }

}
