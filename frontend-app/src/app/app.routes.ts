import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { 
    path: 'home', 
    loadComponent: () => import('./Components/home/home.component').then(m => m.HomeComponent)
  },
  { 
    path: 'create-lesson', 
    loadComponent: () => import('./Components/CreateLesson/create-lesson').then(m => m.CreateLessonComponent)
  },
  // Handle old .html extensions by redirecting
  { path: 'Home.html', redirectTo: 'home', pathMatch: 'full' },
  { path: 'creat_lesson.html', redirectTo: 'create-lesson', pathMatch: 'full' },
  // Catch all route - redirect to home
  { path: '**', redirectTo: 'home' }
];
