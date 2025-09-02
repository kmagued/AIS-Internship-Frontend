import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LessonForm } from '../../interfaces/lesson.interface';

@Component({
  selector: 'app-create-lesson',
  templateUrl: './create-lesson.html',
  styleUrls: ['./create-lesson.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})


export class CreateLessonComponent {
  constructor(private router: Router) {}

  lesson: LessonForm = {
    title: '',
    project: '',
    department: '',
    segment: '',
    vendor: '',
    client: '',
    contact: ''
  };

  lessons: LessonForm[] = [];

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
      this.lessons.push({ ...this.lesson });
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
}
