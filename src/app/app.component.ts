import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">       
                  <ul class="nav navbar-nav mr-auto mt-2 mt-lg-0">
                      <li class="nav-item">
                        <a class="nav-link" routerLink="" routerLinkActive="active">Home<span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" routerLink="/maps" routerLinkActive="active">Maps</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" routerLink="/weatherdata" routerLinkActive="active">WeatherData</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" routerLink="/service" routerLinkActive="active">Services</a>
                      </li>       
                  </ul>
                </div>
              </nav>
              
              <router-outlet></router-outlet>                    
  `,
    styleUrls: ['./app.component.css']  
})
export class AppComponent {
  title = 'everythingaroundus';
}
