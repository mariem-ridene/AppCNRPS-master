import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { CalendarOptions } from '@fullcalendar/core';
import frLocale from '@fullcalendar/core/locales/fr'; // Importer la localisation française

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
    locale: frLocale, // Utilisation du français
    weekends: true,
    events: [
      { title: 'Nouvel An', date: '2024-01-01' },
      { title: 'Fête de l\'Indépendance', date: '2024-03-20' },
      { title: 'Fête du Travail', date: '2024-05-01' },
      { title: 'Fête de la République', date: '2024-07-25' },
      { title: 'Fête des Martyrs', date: '2024-04-09' },
      { title: 'Révolution et Jeunesse', date: '2024-01-14' },
      { title: 'Event 1', date: '2024-09-01' },
      { title: 'Event 2', date: '2024-09-02' }
      // Vous pouvez ajouter d'autres jours fériés ici
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    // Vous pouvez personnaliser les créneaux horaires ici pour planifier la semaine
    slotMinTime: '08:00:00',
    slotMaxTime: '18:00:00'
  };

  constructor() { }

  ngOnInit(): void { }

}
