import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-beers-details',
  templateUrl: './beers-details.component.html',
  styleUrls: ['./beers-details.component.css']
})
export class BeersDetailsComponent implements OnInit {

  prevRoute: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.prevRoute = params['prevRoute'];
    });
  }

  ngOnInit(): void {
  }

  navigateBack(): void {
    this.router.navigate([this.prevRoute]);
  }

}
