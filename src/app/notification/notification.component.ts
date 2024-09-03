import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourrierService } from '../courrier-bloq/courrier.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  
  showMissingPaper = false;
  showBlockReason = false;
  missingDocsDetails: string = '';
  blockingReason: string = '';
  selectedDocs: string[] = [];
  documents: string[] = [
    'Preuve d\'identité',
    'Preuve de résidence',
    'Preuve de revenu',
    'Rapport médical',
    'Rapport familiale',
    'Resultat'
    
  ];
  


  updateMissingDocs(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedDocs.push(checkbox.value);
    } else {
      const index = this.selectedDocs.indexOf(checkbox.value);
      if (index > -1) {
        this.selectedDocs.splice(index, 1);
      }
    }
    this.missingDocsDetails = this.selectedDocs.join(', ');
  }


  
  sendMail() {
    if (this.showMissingPaper) {
      this.router.navigate(['/courrier-bloque'], { queryParams: { type: 'missingDocs', details: this.missingDocsDetails } });
    } else if (this.showBlockReason) {
      this.router.navigate(['/courrier-bloque'], { queryParams: { type: 'blockReason', details: this.blockingReason } });
    }
  }

  sendPhoneMessage() {
    this.router.navigate(['/msg-tel'], { queryParams: { type: 'blockReason', details: this.blockingReason } });
  }

  

  constructor(private route: ActivatedRoute, private courrierService: CourrierService, private router: Router) {}

  ngOnInit() {
    // Récupérer les paramètres de l'URL pour afficher la section correcte
    this.route.queryParams.subscribe(params => {
      if (params['showMissingPaper']) {
        this.showMissingPaper = true;
      }
      if (params['showBlockReason']) {
        this.showBlockReason = true;
      }
    });
  }

  


}
