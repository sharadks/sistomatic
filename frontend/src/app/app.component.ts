import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sistomatic interior';
  version = 'sistomatic version 0.0.0';
  items = [
    {
      name: 'Sistomatic interior verticals', link: 'reactive-form',
      elements: [
        { name: 'KitchenWare', link: '' },
        { name: 'HardWare', link: '' },
       
      ]
    }
  ];

  constructor(
    public router: Router,
    public renderer: Renderer2) { }

  onSelectMenu(link: any): void {
    const element = document.getElementById('bd-docs-nav');
    this.renderer.removeClass(element, 'show');
    const route = '/' + link;
    this.router.navigate([route]);
  }


}

