import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modifier-sa',
  templateUrl: './modifier-sa.component.html',
  styleUrls: ['./modifier-sa.component.css']
})
export class ModifierSaComponent implements OnInit {
  modifySubAdminForm: FormGroup;
  autorisationStatus: string = 'Autorisé'; // Par défaut, l'état est "autorisé"
  selectedEmployee: any;

  constructor(private fb: FormBuilder) {
    this.modifySubAdminForm = this.fb.group({
      login: [''],
      password: [''],
      fullName: [''],
      email: [''],
      phone: [''],
      service: [''],
      fonction:[''],
      autorisation: ['Autorisé'],
      startDate: [''],  // Ajouter ici le champ startDate
      endDate: ['']     // Ajouter ici le champ endDate
    });
  }

  ngOnInit(): void {
    // Simuler le chargement d'un employé sélectionné
    this.selectedEmployee = {
      id: 1,
      fullName: 'Jean Dupont',
      email: 'jean.dupont@example.com',
      phone: '0123456789',
      service: 'Service IT',
      fonction: 'Développeur'
    };

    // Remplir le formulaire avec les données de l'employé sélectionné
    this.modifySubAdminForm.patchValue({
      login: 'jdupont',
      fullName: this.selectedEmployee.fullName,
      email: this.selectedEmployee.email,
      phone: this.selectedEmployee.phone,
      service: this.selectedEmployee.service,
      fonction: this.selectedEmployee.fonction,
      autorisation: this.autorisationStatus,
      startDate: '2024-01-01', // Exemple de date de début par défaut
      endDate: '2024-12-31'    // Exemple de date de fin par défaut
    });
  }

  toggleAuthorization(): void {
    // Basculer l'état de l'autorisation
    if (this.autorisationStatus === 'Autorisé') {
      this.autorisationStatus = 'Non autorisé';
      // Réinitialiser les dates d'autorisation si l'autorisation est arrêtée
      this.modifySubAdminForm.patchValue({
        startDate: '',
        endDate: ''
      });
    } else {
      this.autorisationStatus = 'Autorisé';
      // Ajouter ici une logique pour définir des dates par défaut ou réutiliser les anciennes
    }

    // Mettre à jour le formulaire avec le nouvel état
    this.modifySubAdminForm.patchValue({
      autorisation: this.autorisationStatus
    });
  }

  showPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    // Logique de soumission du formulaire
    const formData = this.modifySubAdminForm.value;
    console.log('Formulaire soumis:', formData);

    // Vous pouvez ajouter ici la logique pour enregistrer les modifications et informer le sous-admin par email
  }

  onCancel(): void {
    // Logique pour annuler les modifications (par exemple, revenir à l'état initial)
    console.log('Modifications annulées');
  }
}
