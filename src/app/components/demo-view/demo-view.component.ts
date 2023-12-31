import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
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

  constructor(private cdr: ChangeDetectorRef, private demoService: DemoService) {
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.isLoading = true;
    this.demoService.loadDataByCategory(this.selectedCategory)
      .then(res => this.data = res)
      .then(() => this.isLoading = false)
      .then(() => this.cdr.markForCheck());
  }
}
