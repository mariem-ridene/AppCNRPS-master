import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Dossier {
  nomAffilie: string;
  matricule: string;
  type: string;
  dateReception: string;
}

@Injectable({
  providedIn: 'root',
})
export class DossierService {
  private dossiers: Dossier[] = [
    {
      nomAffilie: 'Mouhamed',
      matricule: '001',
      type: 'CD',
      dateReception: '01/07/2024',
    },
    {
      nomAffilie: 'Ahmed',
      matricule: '002',
      type: 'AV/CD',
      dateReception: '02/07/2024',
    },
    {
      nomAffilie: 'Sara',
      matricule: '003',
      type: 'PTP',
      dateReception: '03/07/2024',
    },
    {
      nomAffilie: 'Nadia',
      matricule: '004',
      type: 'AV',
      dateReception: '04/07/2024',
    },
    {
      nomAffilie: 'Ali',
      matricule: '005',
      type: 'CD',
      dateReception: '05/07/2024',
    },
    {
      nomAffilie: 'Fatma',
      matricule: '006',
      type: 'PTO',
      dateReception: '06/07/2024',
    },
  ];

  getDossiers(): Observable<Dossier[]> {
    return of(this.dossiers);
  }
}
