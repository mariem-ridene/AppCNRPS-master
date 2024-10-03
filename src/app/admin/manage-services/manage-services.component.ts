import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-services',
  templateUrl: './manage-services.component.html',
  styleUrls: ['./manage-services.component.css']
})
export class ManageServicesComponent {
  services: { name: string, editable: boolean }[] = [
    { name: 'Service Pensions', editable: false },
    { name: 'Service Financier', editable: false },
    { name: 'Service Contentieux', editable: false },
    { name: 'Service Contrôle', editable: false }
  ];

  newService: string = '';

  // Ajouter un nouveau service
  addService() {
    if (this.newService.trim()) {
      this.services.push({ name: this.newService, editable: false });
      this.newService = ''; // Réinitialiser le champ
    }
  }

  // Modifier un service
  editService(index: number) {
    this.services[index].editable = true;
  }

  // Enregistrer les modifications
  saveService(index: number) {
    this.services[index].editable = false;
  }

  // Supprimer un service
  deleteService(index: number) {
    this.services.splice(index, 1);
  }
}
