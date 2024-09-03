import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sous-admin',
  templateUrl: './sous-admin.component.html',
  styleUrls: ['./sous-admin.component.css']
})
export class SousAdminComponent implements OnInit {

 
  router: any;

  users = [
    {
      id: 1,
      username: 'Abir Nacef',
      joinDate: '2024/08/03',
      login: 'Abir',
      password: 'password123',
      autorisation: 'Autorisé',
      status: 'Active',
      avatar: 'https://via.placeholder.com/35'
    },
    {
      id: 2,
      username: 'Anwar Ridene',
      joinDate: '2019/07/18',
      login: 'Anwar',
      password: 'password123',
      autorisation: 'Non autorisé',
      status: 'Non active',
      avatar: 'https://via.placeholder.com/35'
    },
    {
      id: 3,
      username: 'Amal Slouma',
      joinDate: '2020/03/20',
      login: 'Amal',
      password: 'password123',
      autorisation: 'Non autorisé',
      status: 'Non active',
      avatar: 'https://via.placeholder.com/35'
    },
    
    
    // Ajoutez plus d'utilisateurs ici
  ];

  filters = {
    username: '',
    autorisation: '',
    joinDate: ''
  };

  

  filteredUsers = [...this.users];

 

  applyFilters() {
    this.filteredUsers = this.users.filter(user => {
      return (
        (this.filters.username === '' || user.username.toLowerCase().includes(this.filters.username.toLowerCase())) &&
        (this.filters.autorisation === '' || user.autorisation === this.filters.autorisation) &&
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

 
 
  constructor() { }

  ngOnInit(): void {
  }

}
