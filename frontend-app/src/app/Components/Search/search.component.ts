import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SearchItem {
  id: number;
  title: string;
  snippet: string;
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Search.html',
  styleUrls: ['./Search.css']
})
export class SearchComponent {
  query: string = '';
  results: SearchItem[] = [];
  suggestions: SearchItem[] = [];
  meta: string = 'Type and press Enter — results update as you type.';

  private demoData: SearchItem[] = [
    { id: 1, title: 'Frontend Dashboard', snippet: 'React + TypeScript admin dashboard' },
    { id: 2, title: 'User Authentication', snippet: 'Login, signup and JWT flow' },
    { id: 3, title: 'Project Search Service', snippet: 'Search microservice using Elastic/Algolia' },
    { id: 4, title: 'API Docs', snippet: 'How to call the REST endpoints' },
    { id: 5, title: 'Internship Guidelines', snippet: 'Onboarding and tasks for interns' }
  ];

  onSearch() {
    if (!this.query.trim()) {
      this.results = [];
      this.suggestions = [];
      this.meta = 'Please type something to search.';
      return;
    }

    const q = this.query.toLowerCase();
    this.results = this.demoData.filter(d =>
      (d.title + ' ' + d.snippet).toLowerCase().includes(q)
    );

    this.suggestions = this.results.slice(0, 5);
    this.meta = this.results.length > 0
      ? `${this.results.length} result${this.results.length > 1 ? 's' : ''}`
      : 'No results found';
  }

  selectSuggestion(title: string) {
    this.query = title;
    this.onSearch();
  }

  openResult(item: SearchItem) {
    alert(`Open: ${item.title}`);
    // Replace with Angular Router navigation:
    // this.router.navigate(['/items', item.id]);
  }
}
