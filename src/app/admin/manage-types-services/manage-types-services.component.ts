import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-types-services',
  templateUrl: './manage-types-services.component.html',
  styleUrls: ['./manage-types-services.component.css'],
})
export class ManageTypesServicesComponent {
  typesDeDossier: string[] = [
    'PP (قرض شخصي)',
    'Cont.P.P (عقد قرض شخصي)',
    'PL (قرض سكني )',
    'PV (قرض سيارة )',
    'P/U ( قرض جامعي)',
    'Cont.P.U (عقد قرض جامعي)',
    'CD (رأس المال عند الوفاة)',
    'AV/CD (تسبقة على حساب رأس المال)',
    'P/RET (جراية تقاعد)',
    'P/REV (جراية أرملة)',
    'PTO (جراية وقتية للأيتام)',
    'Req (عريضة)',
    'IMMAT (بطاقة ترقيم)',
    'IF (منحة عائلية)',
    'DEC/ATTACH (قرار إلحاق)',
    'DEC/F/ATTACH ( قرار نهاية إلحاق)',
  ];
  services: string[] = [
    'Service Pensions',
    'Service Financier',
    'Service Contentieux',
    'Service Controle',
  ];
  nouveauType: string = '';
  nouveauService: string = '';

  ajouterType() {
    if (this.nouveauType && !this.typesDeDossier.includes(this.nouveauType)) {
      this.typesDeDossier.push(this.nouveauType);
      this.nouveauType = ''; // Réinitialiser l'entrée
    }
  }

  ajouterService() {
    if (this.nouveauService && !this.services.includes(this.nouveauService)) {
      this.services.push(this.nouveauService);
      this.nouveauService = ''; // Réinitialiser l'entrée
    }
  }

  supprimerType(index: number) {
    this.typesDeDossier.splice(index, 1);
  }

  supprimerService(index: number) {
    this.services.splice(index, 1);
  }
}
