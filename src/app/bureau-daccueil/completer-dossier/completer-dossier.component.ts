import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completer-dossier',
  templateUrl: './completer-dossier.component.html',
  styleUrls: ['./completer-dossier.component.css']
})
export class CompleterDossierComponent implements OnInit {



  papersManquants: string[] = ['Carte d\'identité', 'Justificatif de domicile', 'Relevé bancaire', 'Bulletin de salaire'];
  etatDossier: string = 'Non Complet';

  constructor(private router: Router) {}

  updateEtatDossier() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let allChecked = true;

    checkboxes.forEach(checkbox => {
      if (!(<HTMLInputElement>checkbox).checked) {
        allChecked = false;
      }
    });

    this.etatDossier = allChecked ? 'Complet' : 'Non Complet';
  }

  onSubmit() {
    const checkedPapers = this.papersManquants.filter(paper => (<HTMLInputElement>document.getElementById(paper)).checked);
    const missingPapers = this.papersManquants.filter(paper => !(<HTMLInputElement>document.getElementById(paper)).checked);

    if (this.etatDossier === 'Complet') {
      this.router.navigate(['/bureau-daccueil/notif-br']);
    } else {
      this.router.navigate(['/bureau-daccueil/notif-mp'], { state: { missingPapers, checkedPapers } });
    }
  }
  ngOnInit(): void {
  }

}
