import { Component } from '@angular/core';

@Component({
  selector: 'app-lessons',   
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent {
  lessons = [
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
}
