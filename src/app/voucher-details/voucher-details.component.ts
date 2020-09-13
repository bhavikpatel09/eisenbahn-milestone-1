import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-voucher-details',
  templateUrl: './voucher-details.component.html',
  styleUrls: ['./voucher-details.component.css']
})
export class VoucherDetailsComponent implements OnInit {
  voucherNumber = 'VCR232023';
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  navigateNext(): void {
    this.router.navigate(['beers-details'], { queryParams: { prevRoute: 'voucher-details' } });
  }

}
