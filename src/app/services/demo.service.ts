import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  private availableCategories = [
    'Articles',
    'Books',
    'Magazines',
    'Fairytales',
    'Technical Literature',
  ];
  private dataByCategory = new Map([
    ['Articles', { data: 'Some special text related to Articles' }],
    ['Books', { data: 'Some special text related to Books' }],
    ['Magazines', { data: 'Some special text related to Magazines' }],
    ['Fairytales', { data: 'Some special text related to Fairytales' }],
    ['Technical Literature', { data: 'Some special text related to Technical Literature' }],
  ]);

  loadCategories(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.availableCategories), 300);
    });
  }

  loadDataByCategory(category: string): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.dataByCategory.get(category)), 300);
    });
  }
}
