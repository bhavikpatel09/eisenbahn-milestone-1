import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ask-name',
  templateUrl: './ask-name.component.html',
  styleUrls: ['./ask-name.component.css']
})
export class AskNameComponent implements OnInit {
  name: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  navigateNext(): void {
    this.router.navigate(['ask-cpf-number']);
  }

  valid(): boolean {
    let isValid = false;
    if (this.name && this.name !== '') {
      isValid = true;
    }
    return isValid;
  }
}
