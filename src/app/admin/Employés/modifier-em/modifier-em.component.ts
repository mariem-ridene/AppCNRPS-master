import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from './employee.model';

@Component({
  selector: 'app-modifier-em',
  templateUrl: './modifier-em.component.html',
  styleUrls: ['./modifier-em.component.css']
})
export class ModifierEmComponent {
  employee: Employee = new Employee();
  selectedPhoto: string | ArrayBuffer | null = null;
  showPassword: boolean = false;

  // Simulate a pre-existing employee
  private mockEmployeeData(): Employee {
    return {
      id: 1,
      nom: 'Doe',
      prenom: 'John',
      email: 'john.doe@example.com',
      telephone: '+123456789',
      service: 'Service Informatique',
      fonction: 'Développeur',
      login: 'johndoe',
      password: 'password123',
      photo: 'assets/default-avatar.png'
    };
  }

  ngOnInit(): void {
    // Simulate fetching employee data
    this.employee = this.mockEmployeeData();
  }

  onUpdateEmployee(): void {
    // Log the updated employee data to the console (simulating update)
    console.log('Updated Employee:', this.employee);
    alert('Les informations de l\'employé ont été mises à jour avec succès.');
  }

  onCancel(): void {
    // Réinitialiser aux données initiales simulées ou définir des valeurs par défaut
    this.employee = this.mockEmployeeData(); // Réinitialiser aux données initiales
    this.selectedPhoto = null;
    alert('Les modifications ont été annulées.');
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const result = e.target?.result;
            if (result) {
                this.selectedPhoto = result;
                this.employee.photo = result as string;
            }
        };
        reader.readAsDataURL(input.files[0]);
      }
    }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
