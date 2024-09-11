import { Injectable } from '@angular/core';

declare var Dynamsoft: any;

@Injectable({
  providedIn: 'root'
})
export class ScannerService {
  private DWObject: any;

  constructor() {
    console.log('Initialising Dynamsoft Web TWAIN...');
    Dynamsoft.DWT.ProductKey = 'YOUR_PRODUCT_KEY'; // Remplacez par votre clé produit
    Dynamsoft.DWT.Load();
    Dynamsoft.DWT.RegisterEvent('OnWebTwainReady', () => {
      console.log('Dynamsoft Web TWAIN is ready.');
      this.DWObject = Dynamsoft.DWT.GetWebTwain('dwtcontrolContainer');
      if (this.DWObject) {
        console.log('DWObject initialized successfully.');
      } else {
        console.error('Failed to initialize DWObject.');
      }
    });
  }

  public scanDocument(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.DWObject) {
        this.DWObject.IfShowUI = true;
        this.DWObject.SelectSource(() => {
          console.log('Source selected.');
          this.DWObject.OpenSource();
          this.DWObject.AcquireImage({
            IfShowUI: true,
            IfFeederEnabled: false,
            IfDuplexEnabled: false
          }, () => {
            console.log('Image acquired successfully.');
            resolve();
          }, (error: any) => {
            console.error('Error acquiring image:', error);
            reject(error);
          });
        }, (error: any) => {
          console.error('Error selecting source:', error);
          reject(error);
        });
      } else {
        console.error('DWObject is not ready');
        reject('DWObject is not ready');
      }
    });
  }

  public getScannedImages(): any[] {
    const images = [];
    for (let i = 0; i < this.DWObject.HowManyImagesInBuffer; i++) {
      images.push(this.DWObject.GetImage(i));
    }
    return images;
  }
}
