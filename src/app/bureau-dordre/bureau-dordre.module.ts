import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BureauDordreRoutingModule } from './bureau-dordre-routing.module';
import { BureauDordreDashboardComponent } from './bureau-dordre-dashboard/bureau-dordre-dashboard.component';
import { DossiersAAffecterComponent } from './dossiers-a-affecter/dossiers-a-affecter.component';
import { DossiersAffecteeComponent } from './dossiers-affectee/dossiers-affectee.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BureauDordreDashboardComponent,
    DossiersAAffecterComponent,
    DossiersAffecteeComponent,
  ],
  imports: [
    CommonModule,
    BureauDordreRoutingModule,
    SharedModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ],
})
export class BureauDordreModule {}
