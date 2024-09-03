import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-msg-tel',
  templateUrl: './msg-tel.component.html',
  styleUrls: ['./msg-tel.component.css']
})
export class MsgTelComponent {

  affiliateName: string = 'John Doe';
  phoneNumber: string = '123-456-7890';
  messageContent: string = `Bonjour ${this.affiliateName}, votre dossier est incomplet. Veuillez fournir les documents manquants pour continuer le traitement.`;

  sendSMS() {
    // Logique pour envoyer le SMS
    alert('Message envoyé avec succès à ' + this.phoneNumber);
  }

    papers: string[] = [];
  type: string = '';
  blockingReason: string = '';

 

 

    messageTitle: string | undefined;
  messageBody: string | undefined;
  missingDocs: string[] = [];
  missingPapers: string[] = [];
  

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.queryParamMap.get('type') || '';
    this.papers = this.route.snapshot.queryParamMap.get('papers')?.split(',') || [];
    this.blockingReason = this.route.snapshot.queryParamMap.get('reason') || ''
    
    switch(this.type) {
      case 'missing-docs':
        this.messageTitle = 'Notification de Papiers Manquants';
        this.messageBody = 'Cher affilié, il semble que certains documents sont manquants dans votre dossier. Voici la liste des papiers à fournir :';
        this.missingDocs = this.route.snapshot.queryParamMap.getAll('papers');
        break;
      case 'block-reason':
        this.messageTitle = 'Notification de Blocage de Dossier';
        this.messageBody = 'Cher affilié, votre dossier a été bloqué pour la raison suivante :';
        this.blockingReason = this.route.snapshot.queryParamMap.get('reason') || ''; 

        break;
      case 'notif-mp':
        this.messageTitle = 'Notification de Papiers Manquants';
        this.messageBody = 'Cher affilié, veuillez noter que les documents suivants sont manquants :';
        this.missingPapers = this.route.snapshot.queryParamMap.getAll('papers');
        break;
      case 'notif-br':
        this.messageTitle = 'Notification de Réception de Dossier';
        this.messageBody = 'Cher affilié, votre dossier a bien été reçu. Merci.';
        break;
      default:
        this.messageTitle = 'Notification';
        this.messageBody = 'Cher affilié, voici un message concernant votre dossier.';
    }
  }

  confirmMessage() {
    // Logique de confirmation du message téléphonique
    console.log('Message téléphonique confirmé.');
  }

}
