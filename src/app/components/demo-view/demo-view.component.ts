import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  Signal,
  signal,
} from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { DemoService } from '../../services/demo.service';

@Component({
  selector: 'app-demo-view',
  templateUrl: './demo-view.component.html',
  styleUrls: ['./demo-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoViewComponent {
  selectedCategory = signal<string | null>(null);
  categories?: string[];
  data: Signal<Promise<any>>;
  isLoading = false;

  constructor(private demoService: DemoService) {
    this.data = computed<Promise<any>>(() => {
      this.isLoading = true;
      return this.demoService
        .loadDataByCategory(this.selectedCategory()!)
        .finally(() => this.isLoading = false);
    });
  }
}
