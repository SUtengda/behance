import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  @Input() title:string;
  @Input() content:string;
  
  constructor() { }

  ngOnInit() {
  }

}
