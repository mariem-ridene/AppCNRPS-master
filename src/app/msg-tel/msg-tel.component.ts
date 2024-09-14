import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-msg-tel',
  templateUrl: './msg-tel.component.html',
  styleUrls: ['./msg-tel.component.css']
})
export class MsgTelComponent implements OnInit {
  matricule: string = '15526rm';
  demande: string = 'crédit personnel';
  currentDate: string | undefined;
  phoneNumber: string = '23 456 7890';
  messageTitle: string = '';
  messageBody: string = '';
  missingPapers: string[] = [];
  blockingReason: string = '';
  messageContent: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const currentDateObj = new Date();
    this.currentDate = currentDateObj.toLocaleDateString();

    this.phoneNumber = this.route.snapshot.queryParamMap.get('phoneNumber') || this.phoneNumber;
    this.constructMessage();
  }

  constructMessage(): void {
    const type = this.route.snapshot.queryParamMap.get('type');
    
    // Message de base
    let baseMessage = `Une demande de ${this.demande} est déposée au centre local de la CNRPS de Menzel Temime sous le matricule ${this.matricule} à la date de ${this.currentDate}. `;

    switch(type) {
      case 'missing-docs':
        this.messageTitle = 'Notification de Papiers Manquants';
        this.missingPapers = this.route.snapshot.queryParamMap.getAll('papers');
        this.messageBody = `${baseMessage} Cependant, il semble que certains documents sont manquants dans votre dossier. Veuillez fournir les documents suivants : ${this.missingPapers.join(', ')}.`;
        break;
        
      case 'block-reason':
        this.messageTitle = 'Notification de Blocage de Dossier';
        this.blockingReason = this.route.snapshot.queryParamMap.get('reason') || '';
        this.messageBody = `${baseMessage} Votre dossier a été bloqué pour la raison suivante : ${this.blockingReason}.`;
        break;

      case 'notif-mp':
        this.messageTitle = 'Notification de Papiers Manquants';
        this.missingPapers = this.route.snapshot.queryParamMap.getAll('papers');
        this.messageBody = `${baseMessage} Cependant, il semble que certains documents sont manquants dans votre dossier. Veuillez fournir les documents suivants : ${this.missingPapers.join(', ')}.`;
        break;

      case 'notif-br':
        this.messageTitle = 'Notification de Réception de Dossier';
        this.messageBody = `${baseMessage} Votre dossier a bien été reçu. Merci.`;
        break;

      default:
        this.messageTitle = 'Notification';
        this.messageBody = `${baseMessage} Cher affilié, voici un message concernant votre dossier.`;
    }

    // Construire le message final
    this.messageContent = `${this.messageBody}`;
  }

  sendSMS(): void {
    // Logique pour envoyer le SMS
    console.log('Message envoyé :', this.messageContent);
    alert(`Message envoyé avec succès à ${this.phoneNumber}`);
  }
}
