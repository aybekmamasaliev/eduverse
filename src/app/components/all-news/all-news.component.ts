import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-news',
  imports: [CommonModule, MatPaginatorModule],
  templateUrl: './all-news.component.html',
  styleUrl: './all-news.component.scss',
})
export class AllNewsComponent {
  news = [
    {
      id: 1,
      title: 'Results of the International Mathematics Olympiad 2024!',
      description:
        'The organizing committee of the International Mathematics Olympiad has announced the winners of the 2024 olympiad! The brightest minds from around the world competed for the championship title, showcasing exceptional mathematical skills. This',
      location: 'Houston, USA',
      date: '21 February 2025',
      img: '',
    },
    {
      id: 2,
      title: 'Results of the International Mathematics Olympiad 2024!',
      description:
        'The organizing committee of the International Mathematics Olympiad has announced the winners of the 2024 olympiad! The brightest minds from around the world competed for the championship title, showcasing exceptional mathematical skills. This',
      location: 'Houston, USA',
      date: '21 February 2025',
      img: '',
    },
    {
      id: 3,
      title: 'Results of the International Mathematics Olympiad 2024!',
      description:
        'The organizing committee of the International Mathematics Olympiad has announced the winners of the 2024 olympiad! The brightest minds from around the world competed for the championship title, showcasing exceptional mathematical skills. This',
      location: 'Houston, USA',
      date: '21 February 2025',
      img: '',
    },
    {
      id: 4,
      title: 'Results of the International Mathematics Olympiad 2024!',
      description:
        'The organizing committee of the International Mathematics Olympiad has announced the winners of the 2024 olympiad! The brightest minds from around the world competed for the championship title, showcasing exceptional mathematical skills. This',
      location: 'Houston, USA',
      date: '21 February 2025',
      img: '',
    },
    {
      id: 5,
      title: 'Results of the International Mathematics Olympiad 2024!',
      description:
        'The organizing committee of the International Mathematics Olympiad has announced the winners of the 2024 olympiad! The brightest minds from around the world competed for the championship title, showcasing exceptional mathematical skills. This',
      location: 'Houston, USA',
      date: '21 February 2025',
      img: '',
    },
    {
      id: 6,
      title: 'Results of the International Mathematics Olympiad 2024!',
      description:
        'The organizing committee of the International Mathematics Olympiad has announced the winners of the 2024 olympiad! The brightest minds from around the world competed for the championship title, showcasing exceptional mathematical skills. This',
      location: 'Houston, USA',
      date: '21 February 2025',
      img: '',
    },
    {
      id: 7,
      title: 'Results of the International Mathematics Olympiad 2024!',
      description:
        'The organizing committee of the International Mathematics Olympiad has announced the winners of the 2024 olympiad! The brightest minds from around the world competed for the championship title, showcasing exceptional mathematical skills. This',
      location: 'Houston, USA',
      date: '21 February 2025',
      img: '',
    },
    {
      id: 8,
      title: 'Results of the International Mathematics Olympiad 2024!',
      description:
        'The organizing committee of the International Mathematics Olympiad has announced the winners of the 2024 olympiad! The brightest minds from around the world competed for the championship title, showcasing exceptional mathematical skills. This',
      location: 'Houston, USA',
      date: '21 February 2025',
      img: '',
    },
    {
      id: 9,
      title: 'Results of the International Mathematics Olympiad 2024!',
      description:
        'The organizing committee of the International Mathematics Olympiad has announced the winners of the 2024 olympiad! The brightest minds from around the world competed for the championship title, showcasing exceptional mathematical skills. This',
      location: 'Houston, USA',
      date: '21 February 2025',
      img: '',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onPageChange(event: PageEvent) {
    console.log('Текущая страница:', event.pageIndex + 1);
    console.log('Количество элементов на странице:', event.pageSize);
    console.log('Общее количество элементов:', event.length);
  }

  navigateSpecificNews(id: number) {
    this.router.navigate([`event/${id}`]);
  }
}
