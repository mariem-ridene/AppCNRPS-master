import { Component } from '@angular/core';

@Component({
  selector: 'app-suivi-dossier',
  templateUrl: './suivi-dossier.component.html',
  styleUrls: ['./suivi-dossier.component.css'],
})
export class SuiviDossierComponent {
  selectedTab: number = 0; // Default tab

  // Boolean to show/hide filter options
  showFilters: boolean = false;

  // List of services including "Recherche"
  services = [
    'Service Pensions',
    'Service Accueil',
    'Service Finance',
    'Service Juridique',
    'Service Contrôle',
    'Recherche', // New Recherche service
  ];

  // Fields for advanced search including searchTerm for general search input
  searchCriteria = {
    searchTerm: '', // New general search term
    matricule: '',
    affilie: '',
    typeDossier: '',
    etatDossier: '',
    sourceDossier: '',
    employee: '',
    service: '',
    dateRange: {
      start: '',
      end: '',
    },
  };

  // Employees and their dossiers
  employees = [
    {
      service: 'Service Pensions',
      name: 'Ahmed Ben Ammar',
      open: false,
      dossiers: [
        {
          matricule: '12569',
          affilie: 'Mouhamed',
          type: 'AV/DC',
          dateReception: '2024-02-05',
          status: 'en cours',
          statusColor: 'blue',
          canReaffect: true,
        },
        {
          matricule: '56869',
          affilie: 'Asma Ben Abdalla',
          type: 'PTO',
          dateReception: '2024-02-05',
          status: 'Terminé',
          statusColor: 'green',
          canReaffect: false,
        },
      ],
    },
    {
      service: 'Service Pensions',
      name: 'Mouhammed Slama', // New Employee 3
      open: false,
      dossiers: [
        {
          matricule: '56789',
          affilie: 'Sara ben salim',
          type: 'PL',
          dateReception: '2024-01-20',
          status: 'en cours',
          statusColor: 'blue',
          canReaffect: true,
        },
        {
          matricule: '67890',
          affilie: 'Ali ben mouhammad',
          type: 'CD',
          dateReception: '2024-02-01',
          status: 'Manquant',
          statusColor: 'red',
          canReaffect: true,
        },
      ],
    },
    {
      service: 'Service Juridique',
      name: 'Sarra Abidi', // New Employee 4
      open: false,
      dossiers: [
        {
          matricule: '45678',
          affilie: 'Zainab Bou Kharrata',
          type: 'P/U',
          dateReception: '2024-03-10',
          status: 'en cours',
          statusColor: 'blue',
          canReaffect: true,
        },
        {
          matricule: '98765',
          affilie: 'Omar Slouma',
          type: 'Cont.P.U',
          dateReception: '2024-03-12',
          status: 'Terminé',
          statusColor: 'green',
          canReaffect: false,
        },
      ],
    },
    {
      service: 'Service Financier',
      name: 'Asma Ben Abdalla',
      open: false,
      dossiers: [
        {
          matricule: '7890',
          affilie: 'Ahmed Zarrouk',
          type: 'PL',
          dateReception: '2024-03-06',
          status: 'en cours',
          statusColor: 'blue',
          canReaffect: true,
        },
      ],
    },
  ];

  // Filtered search results
  filteredDossiers: any[] = [];

  // Toggle accordion for an employee
  toggleEmployee(employee: any) {
    employee.open = !employee.open;
  }

  // Toggle the display of the filter options
  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  // Method to filter dossiers based on search criteria including searchTerm
  searchDossiers() {
    this.filteredDossiers = []; // Reset previous search results

    // Iterate over all employees and their dossiers
    this.employees.forEach((employee) => {
      employee.dossiers.forEach((dossier) => {
        let matches = true;

        // Check each search criterion
        if (this.searchCriteria.searchTerm) {
          const term = this.searchCriteria.searchTerm.toLowerCase();
          if (
            dossier.matricule.indexOf(term) === -1 &&
            dossier.affilie.toLowerCase().indexOf(term) === -1 &&
            employee.name.toLowerCase().indexOf(term) === -1
          ) {
            matches = false;
          }
        }

        if (
          this.searchCriteria.matricule &&
          dossier.matricule !== this.searchCriteria.matricule
        ) {
          matches = false;
        }
        if (
          this.searchCriteria.affilie &&
          dossier.affilie
            .toLowerCase()
            .indexOf(this.searchCriteria.affilie.toLowerCase()) === -1
        ) {
          matches = false;
        }
        if (
          this.searchCriteria.typeDossier &&
          dossier.type !== this.searchCriteria.typeDossier
        ) {
          matches = false;
        }
        if (
          this.searchCriteria.etatDossier &&
          dossier.status !== this.searchCriteria.etatDossier
        ) {
          matches = false;
        }
        if (
          this.searchCriteria.service &&
          employee.service !== this.searchCriteria.service
        ) {
          matches = false;
        }
        if (
          this.searchCriteria.dateRange.start &&
          dossier.dateReception < this.searchCriteria.dateRange.start
        ) {
          matches = false;
        }
        if (
          this.searchCriteria.dateRange.end &&
          dossier.dateReception > this.searchCriteria.dateRange.end
        ) {
          matches = false;
        }

        // If all criteria match, add dossier to filtered results
        if (matches) {
          this.filteredDossiers.push({
            ...dossier,
            employee: employee.name,
            service: employee.service,
          });
        }
      });
    });
  }

  // Clear the search input and reset results
  clearSearch() {
    this.searchCriteria = {
      searchTerm: '',
      matricule: '',
      affilie: '',
      typeDossier: '',
      etatDossier: '',
      sourceDossier: '',
      employee: '',
      service: '',
      dateRange: {
        start: '',
        end: '',
      },
    };
    this.filteredDossiers = []; // Reset the results
  }

  // Filter employees by selected service for the main tabs
  getFilteredEmployees() {
    return this.employees.filter(
      (employee) => employee.service === this.services[this.selectedTab]
    );
  }
}
