export interface Lesson {
  title: string;
  author: string;
  description: string;
  tags: string[];
  image: string;
}

export interface LessonForm {
  title: string;
  project: string;
  department: string;
  segment: string;
  vendor?: string;
  client?: string;
  contact?: string;
}
