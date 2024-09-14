import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-conge',
  templateUrl: './liste-conge.component.html',
  styleUrls: ['./liste-conge.component.css']
})
export class ListeCongeComponent implements OnInit {

 

  demandes = [
    { nom: 'Ahmed', prenom: 'Ben Ali', typeConges: 'Repos', periode: '2023-08-01 - 2023-08-10', etat: 'accepté' },
    { nom: 'Fatma', prenom: 'Baccar', typeConges: 'Maladie', periode: '2023-07-15 - 2023-07-18', etat: 'refusé' },
    { nom: 'Ali', prenom: 'Ben Salem', typeConges: 'Exceptionnel', periode: '2023-08-15 - 2023-08-20', etat: 'non répondu' }
  ];

  startDate: string | null = null;
  endDate: string | null = null;
  selectedType: string = '';

  filteredDemandes = [...this.demandes];

  ngOnInit(): void {}

  filterRequests(): void {
    const start = this.startDate ? new Date(this.startDate) : null;
    const end = this.endDate ? new Date(this.endDate) : null;

    this.filteredDemandes = this.demandes.filter(demande => {
      const [startPeriod, endPeriod] = demande.periode.split(' - ').map(date => new Date(date));

      const isWithinDateRange = (!start || start <= endPeriod) && (!end || end >= startPeriod);
      const isMatchingType = !this.selectedType || demande.typeConges === this.selectedType;

      return isWithinDateRange && isMatchingType;
    });
  }
}
