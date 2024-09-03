import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-conge',
  templateUrl: './liste-conge.component.html',
  styleUrls: ['./liste-conge.component.css']
})
export class ListeCongeComponent implements OnInit {

 

  demandes = [
    {
      nom: 'John',
      prenom: 'Doe',
      typeConges: 'Repot',
      periode: "10/01/2023-09/02/2023",
      etat: 'accepté'
      
    },
    {
      nom: 'Jane',
      prenom: 'Smith',
      typeConges: 'Maladie',
      periode: "03/01/2023-09/01/2023",
      etat: 'refusé'
    },

    {
      nom: 'Jane',
      prenom: 'Smith',
      typeConges: 'Maladie',
      periode: "05/01/2024-11/02/2024",
      etat: 'non répondu'
    }
    // Ajoutez plus d'exemples de demandes si nécessaire
  ];
  router: any;

  constructor() { }

  ngOnInit(): void { }

 
}
