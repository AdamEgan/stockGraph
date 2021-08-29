import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-resuable-component',
  templateUrl: './resuable-component.component.html',
  styleUrls: ['./resuable-component.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ResuableComponentComponent implements OnInit {
  public variable = 'String';
  constructor() { }

  ngOnInit(): void {
  }

}
