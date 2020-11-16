import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  
  isFullScreenMenuShow: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isFullScreenMenuShow = !this.isFullScreenMenuShow;
  }

}
