import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-full-screen-menu',
  templateUrl: './full-screen-menu.component.html',
  styleUrls: ['./full-screen-menu.component.scss']
})
export class FullScreenMenuComponent implements OnInit {

  @Output() close:EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
