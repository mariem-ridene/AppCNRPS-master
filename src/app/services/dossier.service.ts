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
      nomAffilie: 'Mouhamed Haffar',
      matricule: '75896',
      type: 'PP (قرض شخصي)',
      dateReception: '01/07/2024',
    },
    {
      nomAffilie: 'Ahmed Zakraoui',
      matricule: '789652',
      type: 'Cont.P.P (عقد قرض شخصي)',
      dateReception: '02/07/2024',
    },
    {
      nomAffilie: 'Sara Zammit',
      matricule: '42365',
      type: 'PV (قرض سيارة )',
      dateReception: '03/07/2024',
    },
    {
      nomAffilie: 'Nadia Ridene',
      matricule: '21546',
      type: 'CD (رأس المال عند الوفاة)',
      dateReception: '04/07/2024',
    },
    {
      nomAffilie: 'Ali Saied',
      matricule: '63590',
      type: 'CD (رأس المال عند الوفاة)',
      dateReception: '05/07/2024',
    },
    {
      nomAffilie: 'Fatma Zahra',
      matricule: '20365',
      type: 'Cont.P.P (عقد قرض شخصي)',
      dateReception: '06/07/2024',
    },
  ];

  private dossiersAffectes: Dossier[] = [];
  private dossierFiles: Map<
    string,
    { file: File; type: string; url: string }[]
  > = new Map();

  getDossiers(): Observable<Dossier[]> {
    return of(this.dossiers);
  }

  getDossiersAffectes(): Observable<Dossier[]> {
    return of(this.dossiersAffectes);
  }

  addFilesToDossier(
    dossier: Dossier,
    files: { file: File; type: string; url: string }[]
  ): void {
    const existingFiles = this.dossierFiles.get(dossier.matricule) || [];
    const mergedFiles = this.mergeFiles(existingFiles, files);
    this.dossierFiles.set(dossier.matricule, mergedFiles);
  }

  getFilesForDossier(
    dossier: Dossier
  ): { file: File; type: string; url: string }[] {
    return this.dossierFiles.get(dossier.matricule) || [];
  }

  affecterDossier(dossier: Dossier): void {
    this.dossiers = this.dossiers.filter(
      (d) => d.matricule !== dossier.matricule
    );
    this.dossiersAffectes.push(dossier);
  }

  // Add the updateFilesForDossier method
  updateFilesForDossier(
    dossier: Dossier,
    files: { file: File; type: string; url: string }[]
  ): void {
    this.dossierFiles.set(dossier.matricule, files);
  }

  private mergeFiles(
    existingFiles: { file: File; type: string; url: string }[],
    newFiles: { file: File; type: string; url: string }[]
  ): { file: File; type: string; url: string }[] {
    const fileMap = new Map<
      string,
      { file: File; type: string; url: string }
    >();

    // Add existing files to the map
    existingFiles.forEach((file) => {
      fileMap.set(file.file.name, file);
    });

    // Add or update files in the map
    newFiles.forEach((file) => {
      fileMap.set(file.file.name, file);
    });

    // Convert map back to an array
    return Array.from(fileMap.values());
  }
}
