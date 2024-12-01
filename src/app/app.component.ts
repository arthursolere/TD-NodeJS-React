import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuNavBarComponent } from './menu-nav-bar/menu-nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MenuNavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'td_node';
  constructor() {
    console.log('AppComponent.constructor()');
  }

  ngOnInit(): void {
    console.log('AppComponent.ngOnInit()');
  }
}
