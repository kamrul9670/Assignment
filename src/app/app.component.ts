import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  
  <router-outlet></router-outlet>
  
  
  `,
  styles: []
})


export class AppComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // You can navigate to the 'loginPage' route here
    this.router.navigate(['/loginPage']);
  }
}
