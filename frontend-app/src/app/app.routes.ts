import { Routes } from '@angular/router';
import { CreateLessonComponent } from './Components/CreateLesson/create-lesson';
import { HomeComponent } from './Components/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'create-lesson', component: CreateLessonComponent },
  // Handle old .html extensions by redirecting
  { path: 'Home.html', redirectTo: 'home', pathMatch: 'full' },
  { path: 'creat_lesson.html', redirectTo: 'create-lesson', pathMatch: 'full' },
  // Catch all route - redirect to home
  { path: '**', redirectTo: 'home' }
];
