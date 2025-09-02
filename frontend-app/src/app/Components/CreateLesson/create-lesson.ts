import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LessonService } from '../../services/lesson.service';
import { LessonForm } from '../../interfaces/lesson.interface';
import { Lesson } from '../../interfaces/lesson.interface';
@Component({
  selector: 'app-create-lesson',
  templateUrl: './create-lesson.html',
  styleUrls: ['./create-lesson.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class CreateLessonComponent {
  lessons: Lesson[] = [];
  
  lesson: LessonForm = {
    title: '',
    project: '',
    department: '',
    segment: '',
    vendor: '',
    client: '',
    contact: ''
  };
  
  
  constructor(private router: Router, private lessonService: LessonService) {
    this.lessons = this.lessonService.getLessons();
  }
 
  saveDraft(): void {
    if (this.isFormValid()) {
      console.log('Draft saved', this.lesson);
      alert('Lesson saved as draft!');
    } else {
      alert('Please fill in all required fields before saving.');
    }
  }

  isFormValid(): boolean {
    return !!(
      this.lesson.title &&
      this.lesson.project &&
      this.lesson.department &&
      this.lesson.segment
    );
  }

  onSubmit(form: NgForm): void {
    if (form.valid && this.isFormValid()) {
      this.lessonService.addLesson({
        ...this.lesson,
        author: '', // provide default or actual value
        description: '', // provide default or actual value
        tags: [], // provide default or actual value
        image: '' // provide default or actual value
      }); // 🔥 push to service
      console.log('New Lesson:', this.lesson);
      this.resetForm(form);
      alert('Lesson created successfully!');
    }
  }

  resetForm(form: NgForm): void {
    form.resetForm();
    this.lesson = {
      title: '',
      project: '',
      department: '',
      segment: '',
      vendor: '',
      client: '',
      contact: ''
    };
  }

  openLesson(lesson: LessonForm): void {
    const slug = lesson.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    this.router.navigate(['/lesson', slug]);
  }
}
