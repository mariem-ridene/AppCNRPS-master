import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recu-papier',
  templateUrl: './recu-papier.component.html',
  styleUrls: ['./recu-papier.component.css']
})
export class RecuPapierComponent implements OnInit {
  currentDate: string | undefined;
  affiliateName: string | undefined;
  dossierNumber: string | undefined;

  ngOnInit(): void {
    const currentDateObj = new Date();
    this.currentDate = currentDateObj.toLocaleDateString();
    this.affiliateName = 'John Doe'; // Remplacer par la vraie donnée
    this.dossierNumber = '123456789'; // Remplacer par la vraie donnée
  }

  constructor() { }

  
  

}
