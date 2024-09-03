import { Component } from '@angular/core';

@Component({
  selector: 'app-ajouter-em',
  templateUrl: './ajouter-em.component.html',
  styleUrls: ['./ajouter-em.component.css']
})
export class AjouterEmComponent {
  newEmployee = {
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    service: '',
    fonction: '',
    login: '',
    password: ''
};



selectedPhoto: string | ArrayBuffer | null = null;

onFileSelected(event: any): void {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.selectedPhoto = e.target?.result as string | ArrayBuffer | null;
    };
    
    reader.readAsDataURL(file);
  }
}

onAddEmployee() {
    // Code pour ajouter l'employé
    console.log("Employé ajouté:", this.newEmployee);
}




showPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onCancel() {
    // Réinitialiser les champs du formulaire
    this.newEmployee = {
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      service: '',
      fonction: '',
      login: '',
      password: ''
    };
    this.selectedPhoto = null;
  }
 
}
