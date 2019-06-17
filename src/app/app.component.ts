import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'behance';
  show: boolean = true;
  introductionTitle: string = 'Who we are';
  introductionContent: string = 'We are one of the best bicycle companies in the world. We Provide the best quality products of bicycle and no one can be compared by our service because we are the best and we will be. We diliver all the products with brand new quality and service. Any product is available in different colors and they are very good looking. We take very less delivery charge in comparison with other compnaies';

  ngOnInit() {
    this.onResize();
  }

  onResize(): void {
    if (window.innerWidth < 992) {
      this.show = false
    }
  }
}
