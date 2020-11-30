import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;
  items: any;
  billNo: any;
  billPer: any;
  partyName: any;
  nop: any;
  transport: any;
  ewaybillno: any;

  constructor(
    private meta: Meta,
    private titleService: Title) {
      this.billNo;
      this.billPer;
    this.items =
      [
        {
          itemName: 'A',
          hsn: 'A',
          qty: 'A',
          unit: 'A',
          price: 'A',
          amount: 'A'
        },
        {
          itemName: 'B',
          hsn: 'B',
          qty: 'B',
          unit: 'B',
          price: 'B',
          amount: 'B'
        },
        {
          itemName: 'C',
          hsn: 'C',
          qty: 'C',
          unit: 'C',
          price: 'C',
          amount: 'C'
        }
      ];

  }

  ngOnInit(): void {
    this.titleService.setTitle('angular.ganatan: Une Application Web avec Angular');
    this.meta.addTag({
      name: 'author',
      content: 'danny ganatan'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'Cette application a été développée avec Angular version 11.0.2 et bootstrap 5.0.0' +
          ' Elle applique le Routing, le Lazy loading, le Server side rendering et les Progressive Web App (PWA)'
      });
  }

  onSerch = function () {
      console.log('============================');
  }

}
