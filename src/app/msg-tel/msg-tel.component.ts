import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-msg-tel',
  templateUrl: './msg-tel.component.html',
  styleUrls: ['./msg-tel.component.css']
})
export class MsgTelComponent implements OnInit {

  affiliateName: string = 'John Doe';
  phoneNumber: string = '123-456-7890';
  messageTitle: string = '';
  messageBody: string = '';
  missingPapers: string[] = [];
  blockingReason: string = '';
  messageContent: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.affiliateName = this.route.snapshot.queryParamMap.get('affiliateName') || this.affiliateName;
    this.phoneNumber = this.route.snapshot.queryParamMap.get('phoneNumber') || this.phoneNumber;
    this.constructMessage();
  }

  constructMessage(): void {
    const type = this.route.snapshot.queryParamMap.get('type');
    
    switch(type) {
      case 'missing-docs':
        this.messageTitle = 'Notification de Papiers Manquants';
        this.missingPapers = this.route.snapshot.queryParamMap.getAll('papers');
        this.messageBody = `Cher affilié, il semble que certains documents sont manquants dans votre dossier. Veuillez fournir les documents suivants : ${this.missingPapers.join(', ')}.`;
        break;
        
      case 'block-reason':
        this.messageTitle = 'Notification de Blocage de Dossier';
        this.blockingReason = this.route.snapshot.queryParamMap.get('reason') || '';
        this.messageBody = `Cher affilié, votre dossier a été bloqué pour la raison suivante : ${this.blockingReason}.`;
        break;

      case 'notif-mp':
        this.messageTitle = 'Notification de Papiers Manquants';
        this.missingPapers = this.route.snapshot.queryParamMap.getAll('papers');
        this.messageBody = `Cher affilié, veuillez noter que les documents suivants sont manquants : ${this.missingPapers.join(', ')}.`;
        break;

      case 'notif-br':
        this.messageTitle = 'Notification de Réception de Dossier';
        this.messageBody = 'Cher affilié, votre dossier a bien été reçu. Merci.';
        break;

      default:
        this.messageTitle = 'Notification';
        this.messageBody = 'Cher affilié, voici un message concernant votre dossier.';
    }

    // Construire le message final
    this.messageContent = `Bonjour ${this.affiliateName},\n\n${this.messageBody}`;
  }

  sendSMS(): void {
    // Logique pour envoyer le SMS
    console.log('Message envoyé :', this.messageContent);
    alert(`Message envoyé avec succès à ${this.phoneNumber}`);
  }
}
