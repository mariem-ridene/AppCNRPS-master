import { Component, OnInit } from '@angular/core';

interface Employee {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  service: string;
  photo?: string;
}

@Component({
  selector: 'app-ajouter-sa',
  templateUrl: './ajouter-sa.component.html',
  styleUrls: ['./ajouter-sa.component.css']
})
export class AjouterSAComponent implements OnInit {

  
  employees: Employee[] = [];
  selectedEmployee: Employee | null = null;
  sousAdmin = {
    login: '',
    password: ''
  };
  confirmPassword = '';
  showConfirmPassword = false;

  toggleConfirmPasswordVisibility() {
      this.showConfirmPassword = !this.showConfirmPassword;
  }


  ngOnInit(): void {
    // Remplir la liste des employés avec des données fictives ou provenant d'un service
    this.employees = [
      { id: 1, nom: 'Doe', prenom: 'John', email: 'john.doe@example.com', telephone: '123456789', service: 'Service Accueil', photo: 'https://static4.depositphotos.com/1000816/514/i/450/depositphotos_5140926-stock-photo-closeup-of-employee-in-the.jpg' },
      { id: 2, nom: 'Smith', prenom: 'Jane', email: 'jane.smith@example.com', telephone: '987654321', service: 'Service Pensions' },
      // Ajoutez d'autres employés ici
    ];
  }

  onEmployeeSelected(event: Event): void {
    const selectedEmployeeId = +(event.target as HTMLSelectElement).value;
    this.selectedEmployee = this.employees.find(emp => emp.id === selectedEmployeeId) || null;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (this.selectedEmployee) {
          this.selectedEmployee.photo = e.target.result;
        }
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  onSubmit(): void {
    if (this.sousAdmin.password !== this.confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    // Logique pour enregistrer les données du sous-admin
    console.log("Sous-admin ajouté avec succès", this.sousAdmin);
    
    // Vous pouvez également envoyer un email ici en utilisant un service approprié
  }
}
