import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../../core/services/github.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  fileContent: string = 'reterre2222'; // Вміст файлу для відображення
  filePath: string = 'example.txt'; // Ім'я файлу в репозиторії
  commitMessage: string = 'Додано новий файл';

  constructor(private gitHubService: GitHubService) {}

  ngOnInit(): void {
    this.loadFile();
  }

  // Завантажити файл із GitHub
  loadFile(): void {
    this.gitHubService.getFile(this.filePath).subscribe({
      next: (response) => {
        const content = atob(response.content); // Розкодуємо Base64 вміст
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
