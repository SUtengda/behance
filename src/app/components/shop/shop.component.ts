import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  types :Array<string> = ["Race Rode/TT bikes","Road Mountain bikes","Lifestyle Bikes","Bespoke Bikes"]
  activeLabel:number = 0;
  imgSrcs : Array<string> = ["assets/images/shop/shopByParts.PNG","assets/images/shop/peak-cycles-tires.jpg","assets/images/shop/shopByParts.PNG","assets/images/shop/peak-cycles-tires.jpg"]
  imgSrc :string = "assets/images/shop/shopByParts.PNG";
  constructor() { }

  ngOnInit() {

  }

  toggleLable(index:number){
    this.activeLabel = index;
    this.imgSrc = this.imgSrcs[index];
  }

}
