import {
  ChangeDetectorRef,
  Component, effect,
  EventEmitter, Injector, input,
  Input, InputSignal,
  OnInit,
  Output,
  signal,
  WritableSignal
} from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { DemoService } from '../../services/demo.service';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.scss']
})
export class CategorySelectorComponent implements OnInit {
  @Output() categoriesLoad = new EventEmitter<string[]>();

  selectedIndex = signal(0);
  category: InputSignal<string> = input.required<string>();

  categories?: string[];

  initCategoryEffect = () => effect(() => {
    const category = this.category();
    this.selectedIndex.set(this.categories?.indexOf(category!)!);
  }, { allowSignalWrites: true, injector: this.injector });

  constructor(private demoService: DemoService, private injector: Injector) {
    effect(() => {
      const selectedIndex = this.selectedIndex();
      // this.category?.set(this.categories![selectedIndex]);
    }, { allowSignalWrites: true });
  }

  ngOnInit() {
    this.demoService.loadCategories()
      .then(res => {
        this.categories = res;
        this.categoriesLoad.emit(this.categories);
        // this.category.set(this.categories![0]);
        this.initCategoryEffect();
      });
  }

  onPrev(): void {
    this.selectedIndex.update(selectedIndex => selectedIndex - 1);
  }

  onNext(): void {
    this.selectedIndex.update(selectedIndex => selectedIndex + 1);
  }

  onCategoryChange(category: string): void {
    this.selectedIndex.set(this.categories?.indexOf(category)!);
  }
}
