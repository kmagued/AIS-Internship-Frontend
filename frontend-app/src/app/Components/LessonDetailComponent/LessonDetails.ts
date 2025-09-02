import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Lesson } from '../../interfaces/lesson.interface';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './LessonDetails.html',
  styleUrls: ['./LessonDetails.css'],
  standalone: true,
  imports: [CommonModule]
})
export class LessonDetailComponent implements OnInit {
  lesson: Lesson | undefined;

  // Mock lessons array (later replace with service call)
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.lesson = this.lessons.find(l =>
        l.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '') === slug
      );
    }
  }
}
