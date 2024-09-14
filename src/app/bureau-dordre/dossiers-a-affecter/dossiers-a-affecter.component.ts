import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dossier, DossierService } from 'src/app/services/dossier.service';

@Component({
  selector: 'app-dossiers-a-affecter',
  templateUrl: './dossiers-a-affecter.component.html',
  styleUrls: ['./dossiers-a-affecter.component.css'],
})
export class DossiersAAffecterComponent implements OnInit {
  dossiers$!: Observable<Dossier[]>;
  selectedDossier: Dossier | null = null;

  constructor(private dossierService: DossierService) {}

  ngOnInit(): void {
    this.dossiers$ = this.dossierService.getDossiers();
  }

  onScan(dossier: Dossier): void {
    this.selectedDossier = dossier;
  }

  onAction(dossier: Dossier, action: string): void {
    // Implement logic for handling actions like 'Mettre à jour'
    console.log('Performing action:', action, 'on dossier:', dossier); 
    // You can add additional logic here, like updating the dossier's state or emitting an event.
  }
}
