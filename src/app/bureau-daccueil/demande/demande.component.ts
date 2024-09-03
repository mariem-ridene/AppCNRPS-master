import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
 
  demande = {
    matricule: '',
    typeDossier: '',
    sourceDossier: '',
    nomAffilie: '',
    numTelephone: '',
    adressePostale: '',
    etatDossier: '',
    commentaire: ''
  };
  

  constructor(private router: Router) { }

  onSubmit() {
    if (this.demande.etatDossier === 'Complet') {
      this.router.navigate(['/bureau-daccueil/notif-br']);
    } else if (this.demande.etatDossier === 'Non Complet') {
      this.router.navigate(['/notification'], { queryParams: { showMissingPaper: true } });
    } else {
      alert('Veuillez sélectionner un état pour le dossier.');
    }
  }

  ngOnInit(): void {
  }

}
