import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { DemoService } from '../../services/demo.service';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.scss']
})
export class CategorySelectorComponent implements OnInit {
  @Output() categoriesLoad = new EventEmitter<string[]>();

  selectedCategory?: string;
  selectedIndex = 0;
  categories?: string[];

  constructor(private demoService: DemoService, public categoryService: CategoryService) {
    this.categoryService.category$
      .asObservable()
      .subscribe(category => {
        this.selectedCategory = category!;
        this.selectedIndex = this.categories?.indexOf(category!)!;
      });
  }

  ngOnInit() {
    this.demoService.loadCategories()
      .then(res => {
        this.categories = res;
        this.categoriesLoad.emit(this.categories)
        this.categoryService.category$.next(this.categories![0]);
      });
  }

  onPrev(): void {
    this.selectedIndex -= 1;
    this.categoryService.category$.next(this.categories![this.selectedIndex]);
  }

  onNext(): void {
    this.selectedIndex += 1;
    this.categoryService.category$.next(this.categories![this.selectedIndex]);
  }

  onCategoryChange(category: string): void {
    this.selectedIndex = this.categories?.indexOf(category)!;
    this.categoryService.category$.next(category);
  }
}
