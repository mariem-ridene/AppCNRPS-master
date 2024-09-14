import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ScannerService } from 'src/app/services/scanner.service';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent {
  @Input() dossier: any;
  @Output() close = new EventEmitter<void>();
  scannedImages: string[] = [];

  constructor(private scannerService: ScannerService) {}

  scan(): void {
    console.log('Scan button clicked.');
    this.scannerService.scanDocument().then(() => {
      console.log('Scan completed.');
      this.scannedImages = this.scannerService.getScannedImages();
      console.log('Scanned images:', this.scannedImages);
    }).catch(error => {
      console.error('Scan failed:', error);
    });
  }
}
