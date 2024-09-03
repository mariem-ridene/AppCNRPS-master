
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dmc',
  templateUrl: './dmc.component.html',
  styleUrls: ['./dmc.component.scss']
})
export class DmcComponent implements OnInit {

  leaveType: string = '';
  startDate: string = '';
  endDate: string = '';
  reason: string = '';
  fileName: string | undefined;

  startDateError: string | null = null;
  endDateError: string | null = null;
  formInvalid: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onLeaveTypeChange() {
    this.validateDates();
  }

  onSubmit() {
    // Logique de soumission du formulaire
    if (!this.formInvalid) {
    console.log('Type de congé:', this.leaveType);
    console.log('Date de début:', this.startDate);
    console.log('Date de fin:', this.endDate);
    console.log('Raison:', this.reason);
    }
  }

  onCancel() {
    // Réinitialiser le formulaire ou effectuer d'autres actions lors de l'annulation
    this.leaveType = '';
    this.startDate = '';
    this.endDate = '';
    this.reason = '';
    this.fileName ='';
  }

  validateDates() {
    this.startDateError = null;
    this.endDateError = null;
    this.formInvalid = false;

    const today = new Date().setHours(0, 0, 0, 0);
    const startDate = new Date(this.startDate).setHours(0, 0, 0, 0);
    const endDate = new Date(this.endDate).setHours(0, 0, 0, 0);

    if (startDate <= today) {
      this.startDateError = "La date de début doit être ultérieure à aujourd'hui.";
      this.formInvalid = true;
    }
   

    if (endDate <= startDate) {
      this.endDateError = "La date de fin doit être ultérieure à la date de début.";
      this.formInvalid = true;
    }

    if (this.leaveType === 'vacation' && (endDate - startDate) / (1000 * 60 * 60 * 24) > 30) {
      this.endDateError = "La durée du congé ne doit pas dépasser 30 jours pour un repot.";
      this.formInvalid = true;
    }

    if (this.leaveType === 'personal' && (endDate - startDate) / (1000 * 60 * 60 * 24) > 5) {
      this.endDateError = "La durée du congé ne doit pas dépasser 5 jours pour un congé exceptionnel.";
      this.formInvalid = true;
    }
  }


  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.fileName = file.name;
    } else {
      this.fileName = '';
    }
  }
}
