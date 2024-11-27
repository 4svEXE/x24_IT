import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../../core/services/github.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  fileContent: string = 'Пес патрон'; // Вміст файлу для відображення
  filePath: string = 'example.json'; // Ім'я файлу в репозиторії
  commitMessage: string = 'Блог оновлено ' + new Date();

  constructor(private gitHubService: GitHubService) {}

  ngOnInit(): void {
    this.loadFile();
  }

  // Завантажити файл із GitHub
  loadFile(): void {
    this.gitHubService.getFile(this.filePath).subscribe({
      next: (response) => {
        const content = atob(response.content);
        this.fileContent = content;
        console.log('Файл успішно завантажено:', content);
      },
      error: (error) => console.error('Помилка при завантаженні файлу:', error),
    });
  }

  // Завантажити новий файл на GitHub
  uploadFile(): void {
    const newContent = 'Це новий вміст файлу';
    this.gitHubService.uploadFile(this.filePath, newContent, this.commitMessage).subscribe({
      next: (response) => {
        console.log('Файл успішно завантажено:', response);
        alert('Файл успішно завантажено!');
      },
      error: (error) => console.error('Помилка при завантаженні файлу:', error),
    });
  }
}

const jsonData = [
  {
    "id": 1,
    "title": "Understanding Angular 17",
    "author": "Ivan Bro",
    "date": "2024-11-01",
    "content": "Angular 17 brings new features and optimizations that make it a top choice for web developers. In this post, we explore the key updates and how to leverage them.",
    "tags": ["Angular", "Web Development", "Frontend"],
    "image": "https://example.com/images/angular-17.jpg"
  },
  {
    "id": 2,
    "title": "How to Optimize Your Blog for SEO",
    "author": "Jane Doe",
    "date": "2024-11-15",
    "content": "SEO optimization is crucial for any blog. This guide walks you through practical steps to improve your blog's visibility and performance.",
    "tags": ["SEO", "Blogging", "Marketing"],
    "image": "https://example.com/images/seo-tips.jpg"
  },
  {
    "id": 3,
    "title": "Top JavaScript Frameworks in 2024",
    "author": "John Smith",
    "date": "2024-10-30",
    "content": "JavaScript frameworks are evolving rapidly. This post reviews the top frameworks you should consider for your next project.",
    "tags": ["JavaScript", "Frameworks", "Tech Trends"],
    "image": "https://example.com/images/js-frameworks.jpg"
  },
  {
    "id": 4,
    "title": "Introduction to Scully for Angular",
    "author": "Ivan Bro",
    "date": "2024-11-20",
    "content": "Scully is a static site generator for Angular applications. Learn how to use it to create fast, SEO-friendly sites.",
    "tags": ["Scully", "Angular", "Static Sites"],
    "image": "https://example.com/images/scully-angular.jpg"
  },
  {
    "id": 5,
    "title": "Beginner's Guide to Tailwind CSS",
    "author": "Alice Johnson",
    "date": "2024-11-25",
    "content": "Tailwind CSS is a utility-first CSS framework that has gained massive popularity. This post is a beginner-friendly introduction to Tailwind.",
    "tags": ["CSS", "Tailwind", "Frontend"],
    "image": "https://example.com/images/tailwind-css.jpg"
  }
]
