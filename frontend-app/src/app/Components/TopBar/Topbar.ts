import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [RouterModule], // needed for routerLink
  templateUrl: './Topbar.html',
  styleUrls: ['./Topbar.css']
})
export class TopbarComponent {}
