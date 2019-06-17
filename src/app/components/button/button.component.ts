import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() content: string;
  @Input() bgColor:string;

  style = {
    "background-color" : 'white' ,
    "color" : '',
  }
  constructor() { }

  ngOnInit() {
    if(this.bgColor == 'red'){
      this.style["background-color"]='#f14e4e';
      this.style.color = 'white'
    }  
  }

}
