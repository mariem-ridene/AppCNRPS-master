import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notif-mp',
  templateUrl: './notif-mp.component.html',
  styleUrls: ['./notif-mp.component.scss']
})
export class NotifMPComponent implements OnInit {

 
  missingPapers: string[] = [];
    checkedPapers: string[] = [];
  
    constructor(private router: Router) {
      const navigation = this.router.getCurrentNavigation();
      const state = navigation?.extras.state as { missingPapers: string[], checkedPapers: string[] };
      this.missingPapers = state?.missingPapers || [];
      this.checkedPapers = state?.checkedPapers || [];
    }

    onCourrierClick(): void {
      this.router.navigate(['/bureau-daccueil/courrier-mp'], { 
        queryParams: { 
          checkedPapers: this.checkedPapers,
          missingPapers: this.missingPapers
        }
      });
    }

 

  ngOnInit(): void {
  }

}
