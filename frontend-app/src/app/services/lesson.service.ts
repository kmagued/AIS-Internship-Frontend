import { Injectable } from '@angular/core';
import { Lesson } from '../interfaces/lesson.interface';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private lessons: Lesson[] = [
    {
      title: "MSL Level Control Inadequate",
      author: "Noor Al-Badawi",
      description: "We lead the charge in industrial automation with projects focused on improving efficiency and safety across industries.",
      tags: ["MSL", "Tricorex"],
      image: "https://picsum.photos/600/300"
    },
    {
      title: "Pump Failure Detection",
      author: "Ahmed Salah",
      description: "Innovating pump control systems with AI-based monitoring to prevent downtime and reduce maintenance costs.",
      tags: ["Pump", "AI"],
      image: "https://picsum.photos/600/300"
    },
    {
      title: "Automation Risk Assessment",
      author: "Sara Ali",
      description: "Assessing risks in automation and implementing safety protocols to ensure reliable and secure industrial systems.",
      tags: ["Risk", "Automation"],
      image: "https://picsum.photos/600/300"
    }
  ];

  addLesson(lesson: Lesson): void {
    this.lessons.push(lesson);
    }

  getLessons(): Lesson[] {
    return this.lessons;
  }

  getLessonBySlug(slug: string): Lesson | undefined {
    return this.lessons.find(l =>
      l.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '') === slug
    );
  }
}
