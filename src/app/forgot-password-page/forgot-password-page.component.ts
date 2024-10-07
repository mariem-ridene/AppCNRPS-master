import { Component} from '@angular/core';


@Component({
    selector: 'app-forgot-password-page',
    templateUrl: './forgot-password-page.component.html',
    styleUrls: ['./forgot-password-page.component.css']
})

export class ForgotPasswordPageComponent {
    email: string = '';

    onSubmit() {
      if (this.email) {
        // Logique pour envoyer la demande de réinitialisation à l'admin
        alert(`Demande de réinitialisation de mot de passe envoyée pour ${this.email}`);
      } else {
        alert('Veuillez entrer une adresse e-mail valide.');
      }
    }
}
