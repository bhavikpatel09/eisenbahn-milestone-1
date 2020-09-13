import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogModalService } from '../services/dialog-modal.service';

@Component({
  selector: 'app-ask-cpf-number',
  templateUrl: './ask-cpf-number.component.html',
  styleUrls: ['./ask-cpf-number.component.css']
})
export class AskCpfNumberComponent implements OnInit {

  cpfNumber: string;
  validSampleNumber = '111.111.111.11';
  constructor(private modalService: DialogModalService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  navigateNext(): void {
    if (this.cpfNumber === '111.111.111.11') {
      this.router.navigate(['ask-restaurant-details']);
    }
    else {
      this.modalService.open('invalid-cpf-number');
    }
  }
  valid(): boolean {
    let isValid = false;
    if (this.cpfNumber && this.cpfNumber !== '') {
      isValid = true;
    }
    return isValid;
  }

}
