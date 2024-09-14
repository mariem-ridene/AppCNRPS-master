import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {

  demande = {
    matricule: '',
    typeDossier: '',
    sourceDossier: '',
    nomAffilie: '',
    numTelephone: '',
    adressePostale: '',
    etatDossier: '',
    commentaire: ''
  };

  matriculeValid: boolean = true;
  matriculeErrorMessage: string = '';

  constructor(private router: Router) { }

  // Fonction pour valider le champ matricule
  validateMatricule(): void {
    const matricule = this.demande.matricule;
    const numberRegex = /^[0-9]+$/; // Régex pour les chiffres seulement
    const alphanumericRegex = /^(?=.*[0-9])[a-zA-Z0-9]+$/; // Chiffres et lettres, avec au moins un chiffre

    // Vérifie si le matricule dépasse 10 caractères ou s'il ne contient que des lettres
    if (matricule.length > 10) {
      this.matriculeValid = false;
      this.matriculeErrorMessage = 'Le matricule ne doit pas dépasser 10 caractères.';
    } else if (numberRegex.test(matricule)) {
      // Valide si le matricule contient uniquement des chiffres
      this.matriculeValid = true;
      this.matriculeErrorMessage = '';
    } else if (alphanumericRegex.test(matricule)) {
      // Valide si le matricule contient à la fois des lettres et des chiffres
      this.matriculeValid = true;
      this.matriculeErrorMessage = '';
    } else {
      // Si le matricule ne contient que des lettres ou d'autres caractères non valides
      this.matriculeValid = false;
      this.matriculeErrorMessage = 'Le matricule doit contenir uniquement des chiffres ou une combinaison de chiffres et de lettres.';
    }
  }

  onSubmit() {
    // Valide le champ matricule
    this.validateMatricule();

    // Vérifie si le matricule est valide avant de procéder
    if (this.matriculeValid) {
      console.log('Formulaire soumis avec succès :', this.demande);
      
      // En fonction de l'état du dossier, redirection vers la page appropriée
      if (this.demande.etatDossier === 'Complet') {
        this.router.navigate(['/bureau-daccueil/notif-br']);
      } else if (this.demande.etatDossier === 'Non Complet') {
        this.router.navigate(['/notification'], { queryParams: { showMissingPaper: true } });
      } else {
        alert('Veuillez sélectionner un état pour le dossier.');
      }
    } else {
      // Si le matricule est invalide, affiche une alerte pour informer l'utilisateur
      alert('Veuillez vérifier le matricule. Il doit contenir uniquement des chiffres ou une combinaison de chiffres et de lettres.');
      // Ajout d'une classe d'erreur au champ matricule dans le template pour signaler visuellement l'erreur
      const matriculeInput = document.getElementById('matricule-input');
      if (matriculeInput) {
        matriculeInput.classList.add('is-invalid');
      }
    }
  }

  ngOnInit(): void { }

}
