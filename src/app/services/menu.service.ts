import { animate, style, transition, trigger } from '@angular/animations';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface MenuItem {
  label: string;
  icon: string;
  routeLink: string;
  items?: MenuItem[];
  expanded?: boolean;
}
export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('350ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('350ms', style({ opacity: 0 })),
  ]),
]);

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  // BehaviorSubject to track the current side (e.g., 'admin', 'bureauDordre', etc.)
  private currentSide = new BehaviorSubject<string>('admin');

  // Method to update the current side
  setSide(side: string): void {
    this.currentSide.next(side);
  }

  // Observable that emits the menu items based on the current side
  getMenuItems(): Observable<MenuItem[]> {
    return this.currentSide
      .asObservable()
      .pipe(map((side) => this.menuItems[side]));
  }

  // Menu items configuration, which used to be in MENU_CONFIG, now integrated here
  private menuItems: { [key: string]: MenuItem[] } = {
    admin: [
      {
        label: 'Tableau De Bord',
        icon: 'fal fa-chart-line', 
        routeLink: 'admin/dashboard',
      },
      {
        label: 'Espace Sous-Admins',
        icon: 'fal fa-user-shield',
        routeLink: 'admin/sousAdmin',
      },
      {
        label: 'Espace Employés',
        icon: 'fal fa-users',
        routeLink: 'admin/liste-employes',
      },
      {
        label: 'Espace Congés',
        icon: 'fal fa-calendar-check',
        routeLink: '',
        items: [
          {
            routeLink: 'admin/liste-congés',
            icon: 'fal fa-envelope-open-text ',
            label: 'Demandes',
          },
          {
            routeLink: 'admin/calendrier',
            icon: 'fal fa-calendar',
            label: 'Calendrier',
          },
        ],
      },
      {
        label: 'Espace Dossiers',
        icon: 'fal fa-folder-open',
        routeLink: '',
      },
      {
        label: 'Affectation Standard',
        icon: 'fal fa-exchange-alt',
        routeLink: '',
        items: [
          {
            routeLink: '',
            icon: '',
            label: 'Service',
          },
          {
            routeLink: '',
            icon: '',
            label: 'Type',
          },
          {
            routeLink: '',
            icon: '',
            label: 'Mise à jour',
          },
        ],
      },
    ],
    bureauDordre: [
      {
        label: 'Tableau De Bord',
        icon: 'fal fa-chart-line',
        routeLink: 'bureau-dordre/bureau-dordre-dashboard',
      },
      {
        label: 'Tous les dossiers',
        icon: 'fal fa-folder',
        routeLink: '',
        items: [
          {
            label: 'Dossiers à affecter',
            icon: 'fal fa-folder-open',
            routeLink: 'bureau-dordre/dossiers-a-affecter',
          },
          {
            label: 'Dossiers affecteé',
            icon: 'fal fa-folder-plus',
            routeLink: 'bureau-dordre/dossiers-affectee',
          },
        ],
      },
      {
        routeLink: '',
        icon: 'fal fa-calendar-alt',
        label: 'Congé',
        items: [
          {
            routeLink: 'bureau-dordre/demande-conge',
            icon: 'fal fa-calendar-day',
            label: 'Demande de congé',
          },
          {
            routeLink: 'bureau-dordre/suivi-conges',
            icon: 'fal fa-clock',
            label: 'Suivie congé',
          },
        ],
      },
    ],
    bureauDaccueil: [
      {
        label: 'Tableau De Bord',
        icon: 'fal fa-chart-line',
        routeLink: 'bureau-daccueil/dashbord',
      },
      {
        label: 'Nouvelle Demmande',
        icon: 'fal fa-file-plus',
        routeLink: 'bureau-daccueil/demande',
      },
      {
        label: 'Compléter dossier',
        icon: 'fal fa-clipboard-check',
        routeLink: 'bureau-daccueil/completerDossier',
      },
      {
        label: 'Congés',
        icon: 'fal fa-user-clock',
        routeLink: '',
        items: [
          {
            routeLink: 'congé/demande',
            icon: 'fal fa-file-signature',
            label: 'Demande',
          },
          {
            routeLink: 'congé/suivie',
            icon: 'fal fa-user-check',
            label: 'Suivie',
          },
        ],
      },
    ],
    bureauDeService: [
      {
        label: 'Tableau De Bord',
        icon: 'fal fa-chart-line',
        routeLink: 'bureau-de-service/dash',
      },
      {
        label: 'Dossiers',
        icon: 'fal fa-folder-open',
        routeLink: 'bureau-de-service/dossiers',
      },
      {
        label: 'Congés',
        icon: 'fal fa-user-clock',
        routeLink: '',
        items: [
          {
            routeLink: 'congé/demande',
            icon: 'fal fa-file-signature',
            label: 'Demande',
          },
          {
            routeLink: 'congé/suivie',
            icon: 'fal fa-user-check',
            label: 'Suivie',
          },
        ],
      },
    ],
  };
}
