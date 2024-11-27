import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitHubService } from '../../core/services/github.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  fileContent: any[] = []; // Массив для зберігання JSON-об'єктів
  blogPost: any; // Об'єкт для одного блогу

  constructor(
    private route: ActivatedRoute,
    private gitHubService: GitHubService
  ) {}

  ngOnInit(): void {
    this.loadFile();
  }

  loadFile(): void {
    this.gitHubService.getFile('example.json').subscribe({
      next: (response) => {
        const content = atob(response.content);
        try {
          this.fileContent = JSON.parse(content);
          this.getBlogPost();
        } catch (error) {
          console.error('Помилка при парсингу JSON:', error);
        }
      },
      error: (error) => console.error('Помилка при завантаженні файлу:', error),
    });
  }

  getBlogPost(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if(id){
      this.blogPost = this.fileContent.find(
        (post) => post.id === parseInt(id, 10)
      );
    }
    if (!this.blogPost) {
      console.error('Блог з таким id не знайдено');
    }
  }
}
