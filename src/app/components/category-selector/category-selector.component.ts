import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DemoService } from '../../services/demo.service';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.scss']
})
export class CategorySelectorComponent implements OnInit {
  @Output() categoryChange = new EventEmitter<string>();
  @Output() categoriesLoad = new EventEmitter<string[]>();

  selectedCategory?: string;
  selectedIndex = 0;
  categories?: string[];

  constructor(private demoService: DemoService) {
  }

  ngOnInit() {
    this.demoService.loadCategories()
      .then(res => {
        this.categories = res;
        this.categoriesLoad.emit(this.categories)
        this.selectedCategory = this.categories![0];
        this.categoryChange.emit(this.selectedCategory);
      });
  }

  onPrev(): void {
    this.selectedIndex -= 1;
    this.selectedCategory = this.categories![this.selectedIndex];
    this.categoryChange.emit(this.selectedCategory);
  }

  onNext(): void {
    this.selectedIndex += 1;
    this.selectedCategory = this.categories![this.selectedIndex];
    this.categoryChange.emit(this.selectedCategory);
  }
}
