import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-menu-nav-bar',
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './menu-nav-bar.component.html',
  styleUrl: './menu-nav-bar.component.css'
})
export class MenuNavBarComponent {
  faHome = faHome;
}
