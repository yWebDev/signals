import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, WritableSignal } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { DemoService } from '../../services/demo.service';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.scss']
})
export class CategorySelectorComponent implements OnInit {
  @Input() category!: WritableSignal<string | null>;
  @Output() categoriesLoad = new EventEmitter<string[]>();

  selectedIndex = 0;
  categories?: string[];

  constructor(private demoService: DemoService) {}

  ngOnInit() {
    this.demoService.loadCategories()
      .then(res => {
        this.categories = res;
        this.categoriesLoad.emit(this.categories);
        this.category.set(this.categories![0]);
      });
  }

  onPrev(): void {
    this.selectedIndex -= 1;
    this.category.set(this.categories![this.selectedIndex]);
  }

  onNext(): void {
    this.selectedIndex += 1;
    this.category.set(this.categories![this.selectedIndex]);
  }

  onCategoryChange(category: string): void {
    this.selectedIndex = this.categories?.indexOf(category)!;
    this.category.set(this.categories![this.selectedIndex]);
  }
}
