import { Component, Input, inject, signal } from '@angular/core';
import { ShoesService } from 'src/app/home/home-service.service';
import { Subject, takeUntil } from 'rxjs';
import { Shoes } from '../interfaces/shoes-interface';

@Component({
  selector: 'app-shoes-detail',
  templateUrl: './shoes-detail.component.html',
  styleUrls: ['./shoes-detail.component.css']
})
export class ShoesDetailComponent {
  shoeService = inject(ShoesService);

  @Input('shoesId') shoesIdFromRoute: number;
  private destroy$ = new Subject<void>();

  shoeDetail = signal<Shoes>(undefined);

  constructor(private shoesservice: ShoesService) { }


  ngOnInit(): void {
    if (this.shoesIdFromRoute) {
      this.shoeService.getShoeDetail(this.shoesIdFromRoute)
        .pipe(takeUntil(this.destroy$))
        .subscribe(shoeDetail => this.shoeDetail.set(shoeDetail));
    }
  }
}
