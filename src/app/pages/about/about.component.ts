import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../../core/services/github.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  fileContent: any;
  filePath: string = 'example.json';
  commitMessage: string = `Блог оновлено - ${new Date()}`;
  fileSha: string = '';

  constructor(private gitHubService: GitHubService) {}

  ngOnInit(): void {
    this.loadFile();
  }

  // Завантажити файл із GitHub
  loadFile(): void {
    this.gitHubService.getFile(this.filePath).subscribe({
      next: (response) => {
        const content = atob(response.content);
        try {
          // Збереження sha файлу для подальшого використання
          const fileSha = response.sha;
          console.log('SHA файлу:', fileSha);
          this.fileSha = fileSha;
          console.log('Файл успішно завантажено:', content);

          // Збережіть його у змінну компонента, щоб використовувати далі
          this.fileContent = JSON.parse(content);
        } catch (error) {
          console.error('Помилка при парсингу JSON:', error);
        }
      },
      error: (error) => console.error('Помилка при завантаженні файлу:', error),
    });
  }

  // Завантажити новий файл на GitHub
  uploadFile(): void {
    const newContent = JSON.stringify(this.fileContent, null, 2);
    const encodedContent = this.encodeBase64(newContent);

    console.log('SHA файлу:', this.fileSha);
    if (!this.fileSha) {
      console.error(
        'SHA файлу не знайдено. Будь ласка, завантажте файл перед оновленням.'
      );
      return;
    }

    this.gitHubService
      .uploadFile(
        this.filePath,
        encodedContent,
        this.commitMessage,
        this.fileSha
      )
      .subscribe({
        next: (response) => {
          console.log('Файл успішно завантажено:', response);
          alert('Файл успішно завантажено!');
        },
        error: (error) =>
          console.error('Помилка при завантаженні файлу:', error),
      });
  }

  // Кодування JSON у Base64
  encodeBase64(value: string): string {
    return btoa(unescape(encodeURIComponent(value)));
  }
}

const jsonTest = [
  {
    id: 1,
    title: 'Understanding Angular 17232131',
    author: 'Ivan Bro',
    date: '2024-11-01',
    content:
      'Angular 17 brings new features and optimizations that make it a top choice for web developers. In this post, we explore the key updates and how to leverage them.',
    tags: ['Angular', 'Web Development', 'Frontend'],
    image: 'https://example.com/images/angular-17.jpg',
  },
  {
    id: 2,
    title: 'Understanding Angular 32123117',
    author: 'Ivan Bro',
    date: '2024-11-01',
    content:
      'Angular 17 brings new features and optimizations that make it a top choice for web developers. In this post, we explore the key updates and how to leverage them.',
    tags: ['Angular', 'Web Development', 'Frontend'],
    image: 'https://example.com/images/angular-17.jpg',
  },
  {
    id: 3,
    title: 'Understanding Angular4444 17',
    author: 'Ivan Bro',
    date: '2024-11-01',
    content:
      'Angular 17 brings new features and optimizations that make it a top choice for web developers. In this post, we explore the key updates and how to leverage them.',
    tags: ['Angular', 'Web Development', 'Frontend'],
    image: 'https://example.com/images/angular-17.jpg',
  },
];
