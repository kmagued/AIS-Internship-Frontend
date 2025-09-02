import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lesson } from '../../interfaces/lesson.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',   
  templateUrl: './cards.html',
  styleUrls: ['./cards.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CardsComponent {
  constructor(private router: Router) {}

  lessons: Lesson[] = [
    {
      title: "MSL Level Control Inadequate",
      author: "Noor Al-Badawi",
      description: "We lead the charge in industrial automation with projects...",
      tags: ["MSL", "Tricorex"],
      image: "https://picsum.photos/400/200"
    },
    {
      title: "Pump Failure Detection",
      author: "Ahmed Salah",
      description: "Innovating pump control systems with AI-based monitoring...",
      tags: ["Pump", "AI"],
      image: "https://picsum.photos/400/200"
    },
    {
      title: "Automation Risk Assessment",
      author: "Sara Ali",
      description: "Assessing risks in automation and implementing safety protocols...",
      tags: ["Risk", "Automation"],
      image: "https://picsum.photos/400/200"
    }
  ];

  openLesson(lesson: Lesson): void {
    // Navigate to the lesson detail page with the lesson's data
    this.router.navigate(['/lesson', lesson.title.toLowerCase().replace(/ /g, '-')]);
  }
}
