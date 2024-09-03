import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  selectedStatus: string | null = null;

  constructor(private router: Router) {}

  selectStatus(status: string): void {
    this.selectedStatus = status;
  }

  selectBlockReason(reason: string): void {
    if (reason === 'missing-paper') {
      this.router.navigate(['/notification'], { queryParams: { showMissingPaper: true } });
    } else if (reason === 'other') {
      this.router.navigate(['/notification'], { queryParams: { showBlockReason: true } });
    }
  }

  submitUpdate(): void {
    if (this.selectedStatus === 'blocked') {
      this.router.navigate(['/notification'], { fragment: 'cause-de-blocage' });
    }
    // Ajouter d'autres logiques de soumission ici
  }

  ngOnInit(): void {
  }

}
