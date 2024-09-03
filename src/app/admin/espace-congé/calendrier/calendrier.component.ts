/*import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions } from '@fullcalendar/angular';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss']
})
export class CalendrierComponent implements OnInit {

  

  currentMonth: Date = new Date();
  calendarEvents: any[] = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents() {
    this.calendarEvents = [
      { title: 'Jour Férié', date: '2024-01-01', color: '#ff0000' },
      { title: 'Congé de John Doe', date: '2024-01-05', color: '#28a745' },
      { title: 'Congé de Jane Doe', date: '2024-01-08', color: '#ff9800' },
      // Ajoutez d'autres événements ici
    ];
  }

  previousMonth() {
    this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
    this.loadEvents();
  }

  nextMonth() {
    this.currentMonth.setMonth(this.currentMonth.getMonth() + 1);
    this.loadEvents();
  }

  onEventClick(info: any) {
    this.dialog.open(EventDetailsDialog, {
      width: '400px',
      data: {
        eventTitle: info.event.title,
        eventDate: info.event.start
      }
    });
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events: this.calendarEvents,
    eventClick: this.onEventClick.bind(this),
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    }
  };
}

// Dialog pour afficher les détails de l'événement
@Component({
  selector: 'event-details-dialog',
  template: `
    <h2 mat-dialog-title>Détails de l'événement</h2>
    <mat-dialog-content>
      <p><strong>Événement :</strong> {{data.eventTitle}}</p>
     <p><strong>Date :</strong> {{data.eventDate | date:'fullDate'}}</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Fermer</button>
    </mat-dialog-actions>
  `
})
export class EventDetailsDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}*/
