import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courier-mp',
  templateUrl: './courier-mp.component.html',
  styleUrls: ['./courier-mp.component.css']
})

export class CourierMPComponent implements OnInit {
  checkedPapers: string[] = [];
  missingPapers: string[] = [];
  currentDate: string | undefined;
  affiliateName: string | undefined;
  dossierNumber: string | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.checkedPapers = this.route.snapshot.queryParamMap.getAll('checkedPapers');
    this.missingPapers = this.route.snapshot.queryParamMap.getAll('missingPapers');

    const currentDateObj = new Date();
    this.currentDate = currentDateObj.toLocaleDateString();
    this.affiliateName = 'John Doe'; // Remplacer par la vraie donnée
    this.dossierNumber = '123456789'; // Remplacer par la vraie donnée
  }

  

  


 

}
