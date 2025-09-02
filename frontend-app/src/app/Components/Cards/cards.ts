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

  openLesson(lessons: Lesson): void {
    const slug = lessons.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') // replace spaces & symbols with hyphens
      .replace(/^-+|-+$/g, '');   // trim hyphens

    this.router.navigate(['/lesson', slug]);
  }
}
