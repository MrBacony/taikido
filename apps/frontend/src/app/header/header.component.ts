import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'taikido-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mainLinks: {name: string, route: string}[] = [
    {name: 'Home', route: '/home'},
    {name: 'Trainingszeiten', route: '/training'},
    {name: 'Probetraining', route: '/probetraining'},
    {name: 'Links', route: '/links'},
    {name: 'Blog', route: '/blog'},
    {name: 'Kontakt', route: '/kontakt'}
  ];


  constructor() { }

  ngOnInit() {
  }

}
