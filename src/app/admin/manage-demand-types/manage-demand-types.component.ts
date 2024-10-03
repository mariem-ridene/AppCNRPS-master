import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-demand-types',
  templateUrl: './manage-demand-types.component.html',
  styleUrls: ['./manage-demand-types.component.css']
})
export class ManageDemandTypesComponent {
  demandTypes: { name: string, editable: boolean }[] = [
    { name: 'PP (قرض شخصي)',editable: false },
    { name: 'Cont.P.P (عقد قرض شخصي)', editable: false },
    { name: 'PL (قرض سكني )', editable: false },
    { name: 'PV (قرض سيارة )', editable: false },
    { name: 'P/U ( قرض جامعي)', editable: false },
    { name:  'Cont.P.U (عقد قرض جامعي)', editable: false },
    { name: 'CD (رأس المال عند الوفاة)', editable: false }
  ];
  
  newDemandType: string = '';

  // Ajouter un nouveau type de demande
  addDemandType() {
    if (this.newDemandType.trim()) {
      this.demandTypes.push({ name: this.newDemandType, editable: false });
      this.newDemandType = ''; // Réinitialiser le champ
    }
  }

  // Modifier un type de demande
  editDemandType(index: number) {
    this.demandTypes[index].editable = true;
  }

  // Enregistrer les modifications
  saveDemandType(index: number) {
    this.demandTypes[index].editable = false;
  }

  // Supprimer un type de demande
  deleteDemandType(index: number) {
    this.demandTypes.splice(index, 1);
  }
}
