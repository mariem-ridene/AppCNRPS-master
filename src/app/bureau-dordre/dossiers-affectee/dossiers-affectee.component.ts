import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dossier, DossierService } from 'src/app/services/dossier.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dossiers-affectee',
  templateUrl: './dossiers-affectee.component.html',
  styleUrls: ['./dossiers-affectee.component.css'],
})
export class DossiersAffecteeComponent implements OnInit {
  dossiersAffectes$!: Observable<Dossier[]>;
  selectedDossier: Dossier | null = null;
  uploadedFiles: { file: File; type: string; url: string }[] = [];
  pdfSrc: SafeResourceUrl | null = null;

  constructor(
    private dossierService: DossierService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.dossiersAffectes$ = this.dossierService.getDossiersAffectes();
  }

  onViewDossier(dossier: Dossier): void {
    this.selectedDossier = dossier;
    this.uploadedFiles = this.dossierService.getFilesForDossier(dossier);
  }

  onFileSelected(event: any): void {
    const files: File[] = Array.from(event.target.files);

    // Ajouter de nouveaux fichiers sans remplacer les anciens
    files.forEach((file) => {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        // Ajouter uniquement si le fichier n'existe pas déjà
        if (!this.uploadedFiles.some((f) => f.file.name === file.name)) {
          this.uploadedFiles.push({
            file,
            type: '',
            url: fileReader.result as string,
          });
        }
      };
      fileReader.readAsDataURL(file);
    });
  }

  onDeleteFile(index: number): void {
    this.uploadedFiles.splice(index, 1);
  }

  onConfirmModifications(): void {
    if (this.selectedDossier) {
      // Use the correct method to update files
      this.dossierService.updateFilesForDossier(this.selectedDossier, this.uploadedFiles);
      this.selectedDossier = null;
      this.uploadedFiles = [];
    }
  }

  onCloseView(): void {
    this.selectedDossier = null;
    this.uploadedFiles = [];
  }

  onViewPdf(fileUrl: string): void {
    this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(fileUrl);
  }

  onClosePdf(): void {
    this.pdfSrc = null;
  }
}
