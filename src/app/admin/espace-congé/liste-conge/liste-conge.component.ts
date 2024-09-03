import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-conge',
  templateUrl: './liste-conge.component.html',
  styleUrls: ['./liste-conge.component.scss']
})
export class ListeCongeComponent implements OnInit {

 

  demandes = [
    {
      nom: 'John',
      prenom: 'Doe',
      typeVacances: 'Congé Annuel',
      nombreJours: 10,
      etat: 'accepté'
      
    },
    {
      nom: 'Jane',
      prenom: 'Smith',
      typeVacances: 'Congé Maladie',
      nombreJours: 5,
      etat: 'refusé'
    },

    {
      nom: 'Jane',
      prenom: 'Smith',
      typeVacances: 'Congé Maladie',
      nombreJours: 5,
      etat: 'non répondu'
    }
    // Ajoutez plus d'exemples de demandes si nécessaire
  ];
  router: any;

  constructor() { }

  ngOnInit(): void { }

 
}
