import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourrierService } from 'src/app/courrier-bloq/courrier.service';



interface Dossier {
  matricule: string;
  type: string;
  dateReception: Date;
  etat: string;
}

@Component({
  selector: 'app-dossiers',
  templateUrl: './dossiers.component.html',
  styleUrls: ['./dossiers.component.css']
})
export class DossiersComponent implements OnInit {

  dossiers: Dossier[] = [
    { matricule: '001', type: 'Type A', dateReception: new Date('2024-07-01'), etat: 'En attente' },
    { matricule: '002', type: 'Type B', dateReception: new Date('2024-07-15'), etat: 'En cours' },
    { matricule: '003', type: 'Type c', dateReception: new Date('2024-07-30'), etat: 'Finalisé' },
    { matricule: '003', type: 'Type c', dateReception: new Date('2024-07-30'), etat: 'Bloqué' },
    {matricule: '002', type: 'Type B', dateReception: new Date('2024-07-15'), etat: 'En cours' },
    { matricule: '003', type: 'Type c', dateReception: new Date('2024-07-30'), etat: 'Finalisé' },
    { matricule: '003', type: 'Type c', dateReception: new Date('2024-07-30'), etat: 'Bloqué' }
    // Ajouter d'autres dossiers ici
  ];

  isSubMenuOpen: boolean = false;
  isFullscreen: boolean = false;

  ngOnInit(): void {
    // Initialisation des données si nécessaire
  }

  toggleSubMenu(): void {
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }

  toggleFullscreen(): void {
    this.isFullscreen = !this.isFullscreen;
  }
  constructor(private courrierService: CourrierService, private router: Router) {}

  getBadgeClass(etat: string): string {
    switch(etat) {
      case 'En attente': return 'badge badge-en-attente';
      case 'En cours': return 'badge badge-en-cours';
      case 'Finalisé': return 'badge badge-terminé';
      case 'Bloqué': return 'badge badge-bloqué';
      default: return 'badge';
    }
  }

  updateStatus(dossier: any) {
    // Logique de mise à jour du statut
    this.router.navigate(['/service/dossier/detail']);
  }

  showDocuments(matricule: string) {
    // Logique pour afficher les documents
    this.router.navigate(['/service/dossier/support']);
  }

  deleteDossier(dossier: any) {
    this.dossiers = this.dossiers.filter(d => d !== dossier);
  }

  informerAffilie(dossier: any) {
    // Vous pouvez ajouter une logique pour transmettre des informations spécifiques si nécessaire
    this.router.navigate(['/notification']);
  }

  

  

}
