import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '../Cards/cards';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardsComponent],
  template: `
    <div class="home-container">
      <header class="home-header">
        <h1>Welcome to AIS Learning Platform</h1>
        <p>Explore our lessons and start learning today</p>
      </header>
      
  
    </div>
  `,
  styles: [`
    .home-container {
      padding: 2rem;
    }
    
    .home-header {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .home-header h1 {
      font-size: 2.5rem;
      color: #333;
      margin-bottom: 1rem;
    }
    
    .home-header p {
      font-size: 1.2rem;
      color: #666;
    }
  `]
})
export class HomeComponent { }
