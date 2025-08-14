import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  AfterViewInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Article } from '../../entities/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren('eventItem') eventItems!: QueryList<ElementRef>;

  activeButtonIndex = 0;
  buttonsCount = 1;
  dynamicValue = 0;
  groupSize = 3;
  activeIndex = 0;

  private resizeListener = () => this.handleResize();
  private intersectionObserver!: IntersectionObserver;

  get buttonArray(): number[] {
    return Array.from({ length: this.buttonsCount });
  }

  articles: Article[] = [
    {
      id: 1,
      title: 'ok',
      content: 'content',
      date: 'monday',
      location: 'location',
    },
    {
      id: 2,
      title: 'ok',
      content: 'content',
      date: 'monday',
      location: 'location',
    },
    {
      id: 3,
      title: 'ok',
      content: 'content',
      date: 'monday',
      location: 'location',
    },
    {
      id: 4,
      title: 'ok',
      content: 'content',
      date: 'monday',
      location: 'location',
    },
    {
      id: 5,
      title: 'ok',
      content: 'content',
      date: 'monday',
      location: 'location',
    },
    {
      id: 6,
      title: 'ok',
      content: 'content',
      date: 'monday',
      location: 'location',
    },
    {
      id: 7,
      title: 'ok',
      content: 'content',
      date: 'monday',
      location: 'location',
    },
    {
      id: 8,
      title: 'ok',
      content: 'content',
      date: 'monday',
      location: 'location',
    },
    {
      id: 9,
      title: 'ok',
      content: 'content',
      date: 'monday',
      location: 'location',
    },
    {
      id: 10,
      title: 'ok',
      content: 'content',
      date: 'monday',
      location: 'location',
    },
    {
      id: 11,
      title: 'ok',
      content: 'content',
      date: 'monday',
      location: 'location',
    },
    {
      id: 12,
      title: 'ok',
      content: 'content',
      date: 'monday',
      location: 'location',
    },
    {
      id: 13,
      title: 'ok',
      content: 'content',
      date: 'monday',
      location: 'location',
    },
    {
      id: 14,
      title: 'ok',
      content: 'content',
      date: 'monday',
      location: 'location',
    },
    {
      id: 15,
      title: 'ok',
      content: 'content',
      date: 'monday',
      location: 'location',
    },
    {
      id: 16,
      title: 'ok',
      content: 'content',
      date: 'monday',
      location: 'location',
    },
    {
      id: 17,
      title: 'ok',
      content: 'content',
      date: 'monday',
      location: 'location',
    },
    {
      id: 18,
      title: 'ok',
      content: 'content',
      date: 'monday',
      location: 'location',
    },
    {
      id: 19,
      title: 'ok',
      content: 'content',
      date: 'monday',
      location: 'location',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateGroupSize();
    this.updateButtonsCount();
    window.addEventListener('resize', this.resizeListener);
  }

  ngAfterViewInit(): void {
    this.initIntersectionObserver();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeListener);
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  onScroll(event: Event): void {
    const scrollContainer = event.target as HTMLElement;
    const scrollLeft = scrollContainer.scrollLeft;
    const itemWidth = scrollContainer.scrollWidth / this.buttonsCount;
    this.activeButtonIndex = Math.round(scrollLeft / itemWidth);
  }

  scrollTo(groupIndex: number): void {
    this.dynamicValue = -(100 * groupIndex);
    this.activeButtonIndex = groupIndex;
  }

  private updateButtonsCount(): void {
    this.buttonsCount = Math.ceil(this.articles.length / this.groupSize);
  }

  private updateGroupSize(): void {
    this.groupSize = window.innerWidth <= 767 ? 2 : 3;
  }

  private handleResize(): void {
    const prevGroupSize = this.groupSize;
    this.updateGroupSize();
    if (prevGroupSize !== this.groupSize) {
      this.updateButtonsCount();
    }
  }

  private initIntersectionObserver(): void {
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeIndex = Number(entry.target.getAttribute('data-index'));
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.8 }
    );

    this.eventItems.forEach((item) =>
      this.intersectionObserver.observe(item.nativeElement)
    );
  }

  navigateSpecificNews(id: number) {
    this.router.navigate([`landing/event/${id}`]);
  }

  navigateAllNews() {
    this.router.navigateByUrl('landing/news');
  }
}
