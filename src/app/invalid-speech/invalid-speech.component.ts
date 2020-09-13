import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-invalid-speech',
  templateUrl: './invalid-speech.component.html',
  styleUrls: ['./invalid-speech.component.css']
})
export class InvalidSpeechComponent implements OnInit {


  voucherNumber = 'INCV02102';
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  navigateNext(): void {
    this.router.navigate(['beers-details'], { queryParams: { prevRoute: 'invalid-speech' } });
  }
}
