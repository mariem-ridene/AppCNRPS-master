import { Component } from '@angular/core';

@Component({
  selector: 'app-affectation-standard',
  templateUrl: './affectation-standard.component.html',
  styleUrls: ['./affectation-standard.component.css'],
})
export class AffectationStandardComponent {
  employees: string[] = ['Ahmed Ben Ammar', 'Asma Ben Abdalla', 'Mouhammed Slama', 'Sarra Abidi'];
  typesDeDossier: string[] = [
    'PP (قرض شخصي)',
    'Cont.P.P (عقد قرض شخصي)',
    'PL (قرض سكني )',
    'PV (قرض سيارة )',
    'P/U ( قرض جامعي)',
    'Cont.P.U (عقد قرض جامعي)',
    'CD (رأس المال عند الوفاة)',
  ];
  services: string[] = [
    'Service Pensions',
    'Service Accueil',
    'Service Finance',
    'Service Juridique',
    'Service Contrôle',
  ];

  selectedEmployee: string = '';
  selectedTypeDeDossier: string = '';
  selectedService: string = '';
  
  affectations: { employee: string, service: string, typesDossier: string[] }[] = [];

  ajouterAffectation() {
    if (this.selectedEmployee && this.selectedService && this.selectedTypeDeDossier) {
      const employeeIndex = this.affectations.findIndex(affectation => affectation.employee === this.selectedEmployee && affectation.service === this.selectedService);
      
      if (employeeIndex !== -1) {
        if (!this.affectations[employeeIndex].typesDossier.includes(this.selectedTypeDeDossier)) {
          this.affectations[employeeIndex].typesDossier.push(this.selectedTypeDeDossier);
        }
      } else {
        this.affectations.push({
          employee: this.selectedEmployee,
          service: this.selectedService,
          typesDossier: [this.selectedTypeDeDossier]
        });
      }
      
      this.selectedEmployee = '';
      this.selectedService = '';
      this.selectedTypeDeDossier = '';
    }
  }

  supprimerAffectation(employee: string, service: string, typeDossier: string) {
    const employeeIndex = this.affectations.findIndex(affectation => affectation.employee === employee && affectation.service === service);
    if (employeeIndex !== -1) {
      const typeIndex = this.affectations[employeeIndex].typesDossier.indexOf(typeDossier);
      if (typeIndex !== -1) {
        this.affectations[employeeIndex].typesDossier.splice(typeIndex, 1);
        if (this.affectations[employeeIndex].typesDossier.length === 0) {
          this.affectations.splice(employeeIndex, 1);
        }
      }
    }
  }

  remplirChamps(employee: string, service: string) {
    this.selectedEmployee = employee;
    this.selectedService = service;
    this.selectedTypeDeDossier = '';  // Reset the type de dossier to allow selecting a new one
  }
}
