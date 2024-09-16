import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dossier, DossierService } from 'src/app/services/dossier.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dossiers-a-affecter',
  templateUrl: './dossiers-a-affecter.component.html',
  styleUrls: ['./dossiers-a-affecter.component.css'],
})
export class DossiersAAffecterComponent implements OnInit {
onViewDossier(_t9: Dossier) {
throw new Error('Method not implemented.');
}
onDeleteFile(_t38: number) {
throw new Error('Method not implemented.');
}
onCloseView() {
throw new Error('Method not implemented.');
}
  dossiers$!: Observable<Dossier[]>;
  dossiersAffectes$!: Observable<Dossier[]>;
  selectedDossier: Dossier | null = null;
  uploadedFiles: { file: File, type: string, url: string }[] = [];
  pdfSrc: SafeResourceUrl | null = null;

  constructor(private dossierService: DossierService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.loadDossiers();
  }

  loadDossiers(): void {
    this.dossiers$ = this.dossierService.getDossiers();
    this.dossiersAffectes$ = this.dossierService.getDossiersAffectes();
  }

  onImporterDocuments(dossier: Dossier): void {
    this.selectedDossier = dossier;
    this.uploadedFiles = this.dossierService.getFilesForDossier(dossier); // Charge les fichiers déjà associés au dossier
  }

  onFileSelected(event: any): void {
    const files: File[] = Array.from(event.target.files);

    // Ajouter de nouveaux fichiers sans remplacer les anciens
    files.forEach(file => {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        this.uploadedFiles.push({
          file,
          type: '',
          url: fileReader.result as string
        });
      };
      fileReader.readAsDataURL(file);
    });
  }

  onAffecterDossier(): void {
    if (this.selectedDossier) {
      this.dossierService.addFilesToDossier(this.selectedDossier, this.uploadedFiles); // Sauvegarde les fichiers avant l'affectation
      this.dossierService.affecterDossier(this.selectedDossier);
      this.loadDossiers(); // Recharge la liste des dossiers
      this.onCloseScanner();
    }
  }

  onCloseScanner(): void {
    this.selectedDossier = null;
    this.uploadedFiles = [];
    this.pdfSrc = null;
  }

  onViewPdf(fileUrl: string): void {
    this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(fileUrl);
  }

  onPrintPdf(): void {
    if (this.pdfSrc) {
      const iframe = document.createElement('iframe');
      iframe.style.position = 'fixed';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.top = '0';
      iframe.style.left = '0';
      iframe.src = this.pdfSrc as string;
      document.body.appendChild(iframe);
      iframe.contentWindow?.print();
      document.body.removeChild(iframe);
    }
  }

  onClosePdf(): void {
    this.pdfSrc = null;
  }
}
