import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogModalService } from '../services/dialog-modal.service';

@Component({
  selector: 'app-age-gate',
  templateUrl: './age-gate.component.html',
  styleUrls: ['./age-gate.component.css']
})
export class AgeGateComponent implements OnInit {

  constructor(private modalService: DialogModalService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  navigateNext(): void {
    this.router.navigate(['ask-name']);
  }
  openModal(id: string): void {
    this.modalService.open(id);
  }

  closeModal(id: string): void {
    this.modalService.close(id);
  }
}
