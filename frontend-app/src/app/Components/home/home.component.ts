import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '../Cards/cards';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardsComponent],
  templateUrl: './Home.html',
  styleUrls: ['./Home.css']
})
export class HomeComponent { }
