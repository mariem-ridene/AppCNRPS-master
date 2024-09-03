import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-conge',
  templateUrl: './details-conge.component.html',
  styleUrls: ['./details-conge.component.css']
})
export class DetailsCongeComponent implements OnInit {

  
  employee = {
    photoUrl: 'https://static4.depositphotos.com/1000816/514/i/450/depositphotos_5140926-stock-photo-closeup-of-employee-in-the.jpg',
    nom: 'John',
    prenom: 'Doe',
    fonction: 'Analyste',
    service: 'Service IT'
  };

  conge = {
    type: 'Repos',
    dateDebut: new Date('2024-08-30'),
    dateFin: new Date('2024-09-05'),
    periode: 6,
    certificatUrl: 'path/to/certificat.pdf'  // Ajoutez cette ligne avec le chemin du certificat
  };

  constructor() { }

  ngOnInit(): void { }

  accepter(): void {
    // Logique pour accepter la demande de congé
    console.log('Demande de congé acceptée');
  }

  refuser(): void {
    // Logique pour refuser la demande de congé
    console.log('Demande de congé refusée');
  }

 

}
