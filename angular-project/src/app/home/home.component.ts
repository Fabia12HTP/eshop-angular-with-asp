import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ShoesService } from './home-service.service'
import { Shoes } from './../interfaces/shoes-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: []
})
export class HomeComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  searchText: any;

  shoes = signal<Shoes[]>([]);
  constructor(private shoesService: ShoesService) { }

  ngOnInit(): void {
    this.shoesService.getShoes()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => this.shoes.set(result),
        (error) => {
          console.error('Error fetching shoes:', error);
        }
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleLike(shoe: Shoes): void {
    shoe.like = !shoe.like;
  }
}
