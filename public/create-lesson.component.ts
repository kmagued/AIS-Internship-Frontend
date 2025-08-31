import { Component } from '@angular/core';

@Component({
  selector: 'create-lesson',
  templateUrl: './creat_lesson.html',
  styleUrls: ['./create-lesson.component.css'],
})
export class CreateLessonComponent {
  lesson: any = {
    title: '',
    project: '',
    department: '',
    segment: '',
    vendor: '',
    client: '',
    contact: '',
  };

  lessons: any[] = [];

  saveDraft() {
    console.log('Draft saved', this.lesson);
    alert('Lesson saved as draft!');
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.lessons.push({ ...this.lesson });
      console.log('New Lesson:', this.lesson);
      alert('Lesson submitted successfully!');
      form.resetForm();
    }
  }
}
