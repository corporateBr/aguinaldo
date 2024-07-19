import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


export interface Info {
  address: string;
  bio: string;
  email: string;
  formation: string;
  instagram: string;
  oab: string;
  telephone: string;
  mainTelephone: string;
  tittle: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {


}




  ngOnInit() {
      this.router.events.subscribe((evt) => {
          if (!(evt instanceof NavigationEnd)) {
              return;
          }
          window.scrollTo(0, 0);
      });
  }

}
