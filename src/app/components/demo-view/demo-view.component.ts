import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { switchMap, tap } from 'rxjs';
import { CategoryService } from '../../services/category.service';
import { DemoService } from '../../services/demo.service';

@Component({
  selector: 'app-demo-view',
  templateUrl: './demo-view.component.html',
  styleUrls: ['./demo-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoViewComponent {
  selectedCategory?: string;
  categories?: string[];
  data: any;
  isLoading = false;

  constructor(private cdr: ChangeDetectorRef, private demoService: DemoService, private categoryService: CategoryService) {
    this.categoryService.category$
      .asObservable()
      .pipe(
        tap(() => this.isLoading = true),
        switchMap((category: string | null) => {
          this.selectedCategory = category!;
          return this.demoService.loadDataByCategory(category!)
        })
      )
      .subscribe((res) => {
        this.data = res;
        this.isLoading = false;
        this.cdr.markForCheck();
      })
  }

  onCategoryItemClick(category: string): void {
    this.categoryService.category$.next(category);
  }
}
