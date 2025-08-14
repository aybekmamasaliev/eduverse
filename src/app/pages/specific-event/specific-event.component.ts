import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../../entities/article';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-specific-event',
  imports: [CommonModule],
  templateUrl: './specific-event.component.html',
  styleUrl: './specific-event.component.scss',
})
export class SpecificEventComponent implements OnInit {
  dynamicValue: number = 0;
   choosenImg: number = 0;

  article: Article = {
    id: 1,
    title: 'Results of the International Mathematics Olympiad 2024!',
    content:
      'The International Mathematics Olympiad (IMO) 2024 has officially concluded, bringing together the most talented young mathematicians from around the globe. This prestigious olympiad, held annually, tests participants’ problem-solving abilities, logical thinking, and mathematical ingenuity. With rigorous problem sets and intense olympiad, this year’s IMO was nothing short of remarkable.',
    date: '21 February 2025',
    location: 'Houston, USA',
  };

  imgs = [
    { path: 'assets/news-1.svg' },
    { path: 'assets/news-1.svg' },
    { path: 'assets/news-1.svg' },
    { path: 'assets/news-1.svg' },
    { path: 'assets/news-1.svg' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateHome() {
    this.router.navigate(['']);
  }

  showImg(index:number) {
    this.choosenImg = index;
    this.dynamicValue = -(100 * index);
  }
}
