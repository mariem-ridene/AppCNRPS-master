import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  router: any;

  users = [
    {
      id: 1,
      name: 'Delilah Moon',
      joinDate: '2020/01/03',
      service: 'Service accueil',
      avatar: 'https://via.placeholder.com/35',
      fonction: 'developpeur'
    },
    {
      id: 2,
      name: 'Hillary Rasmussen',
      joinDate: '2019/07/18',
      service: 'Service pensions',
      avatar: 'https://via.placeholder.com/35',
      fonction: 'réceptionniste'
    },
    {
      id: 3,
      name: 'Herman Tate',
      joinDate: '2020/03/20',
      service: 'Service financier',
      avatar: 'https://via.placeholder.com/35',
      fonction: 'developpeur'
    },
    
    
    // Ajoutez plus d'utilisateurs ici
  ];

  filters = {
    name: '',
    service: '',
    joinDate: ''
  };

  

  filteredUsers = [...this.users];

 

  applyFilters() {
    this.filteredUsers = this.users.filter(user => {
      return (
        (this.filters.name === '' || user.name.toLowerCase().includes(this.filters.name.toLowerCase())) &&
        (this.filters.service === '' || user.service === this.filters.service) &&
        (this.filters.joinDate === '' || user.joinDate === this.filters.joinDate)
      );
    });
  }

  deleteUser(userId: number) {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) {
      this.users = this.users.filter(user => user.id !== userId);
      this.applyFilters(); // Met à jour la liste filtrée
    }
  }
}
