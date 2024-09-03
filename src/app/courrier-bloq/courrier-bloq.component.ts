import { Component, OnInit } from '@angular/core';
import { CourrierService } from './courrier.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courrier-bloq',
  templateUrl: './courrier-bloq.component.html',
  styleUrls: ['./courrier-bloq.component.css']
})
export class CourrierBloqComponent implements OnInit {

  missingDocs: string = '';
  blockingReason: string = '';
  currentDate: string | undefined;
  affiliateName: string | undefined;
  dossierNumber: string | undefined;
  

  

  ngOnInit() {
    const currentDateObj = new Date();
    this.currentDate = currentDateObj.toLocaleDateString();
    this.affiliateName = 'John Doe'; // Remplacer par la vraie donnée
    this.dossierNumber = '123456789'; // Remplacer par la vraie donnée

   
  }

  

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params['type'] === 'missingDocs') {
        this.missingDocs = params['details'];
      } else if (params['type'] === 'blockReason') {
        this.blockingReason = params['details'];
      }
    });
  }

 

}

