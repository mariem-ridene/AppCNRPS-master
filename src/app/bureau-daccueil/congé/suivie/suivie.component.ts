import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suivie',
  templateUrl: './suivie.component.html',
  styleUrls: ['./suivie.component.scss']
})
export class SuivieComponent implements OnInit {

  totalRequests: number | undefined;
  approvedRequests: number | undefined;
  pendingRequests: number | undefined;
  rejectedRequests: number | undefined;
  searchTerm: string = '';
  filterStatus: string = '';

  requests = [
    { startDate: '2024-07-01', endDate: '2024-07-10', leaveType: 'Vacances', status: 'Approuvé' },
    { startDate: '2024-08-01', endDate: '2024-08-05', leaveType: 'Maladie', status: 'En Attente' },
    { startDate: '2024-09-01', endDate: '2024-09-10', leaveType: 'Personnel', status: 'Refusé' },
    { startDate: '2025-05-01', endDate: '2025-05-15', leaveType: 'Mariage', status: 'Approuvé' },
    { startDate: '2025-10-01', endDate: '2025-10-5', leaveType: 'Maladie', status: 'En Attente' },
    { startDate: '2025-10-01', endDate: '2025-10-5', leaveType: 'Maladie', status: 'Approuvé' },
    { startDate: '2025-05-01', endDate: '2025-05-15', leaveType: 'Mariage', status: 'Approuvé' },
    { startDate: '2025-10-01', endDate: '2025-10-5', leaveType: 'Maladie', status: 'En Attente' },
    { startDate: '2025-10-01', endDate: '2025-10-5', leaveType: 'Maladie', status: 'Approuvé' },
    { startDate: '2025-05-01', endDate: '2025-05-15', leaveType: 'Mariage', status: 'Approuvé' },
    { startDate: '2025-10-01', endDate: '2025-10-5', leaveType: 'Maladie', status: 'En Attente' },
    { startDate: '2025-10-01', endDate: '2025-10-5', leaveType: 'Maladie', status: 'Approuvé' }
    
    
    // Ajoutez plus de demandes ici
  ];

  constructor() { }

  ngOnInit(): void {
    this.calculateSummary();
  }

  calculateSummary(): void {
    this.totalRequests = this.requests.length;
    this.approvedRequests = this.requests.filter(r => r.status === 'Approuvé').length;
    this.pendingRequests = this.requests.filter(r => r.status === 'En Attente').length;
    this.rejectedRequests = this.requests.filter(r => r.status === 'Refusé').length;
  }

  filteredRequests() {
    return this.requests.filter(request => {
      return (
        (!this.searchTerm || request.leaveType.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
        (!this.filterStatus || request.status === this.filterStatus)
      );
    });
  }

  viewRequest(request: any) {
    // Fonction pour visualiser les détails de la demande
    console.log(request);
  }

  exportToPDF() {
    // Fonction pour exporter les données au format PDF
    console.log('Exporter PDF');
  }

  exportToExcel() {
    // Fonction pour exporter les données au format Excel
    console.log('Exporter Excel');
  }

}
