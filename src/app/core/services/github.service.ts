import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GitHubService {
  private readonly username = environment.gh.user;
  private readonly reponame = environment.gh.repo;
  private readonly token = environment.gh.apiKey;
  private readonly apiUrl = `https://api.github.com/repos/${this.username}/${this.reponame}/contents/src/app/core/json/`;

  constructor(private http: HttpClient) {}

  // Метод для кодування Unicode у Base64
  private encodeToBase64(content: string): string {
    return btoa(unescape(encodeURIComponent(content)));
  }

  // Завантажити файл у репозиторій
  uploadFile(
    filePath: string,
    fileContent: string,
    commitMessage: string
  ): Observable<any> {
    const url = `${this.apiUrl}${filePath}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
      'Content-Type': 'application/json',
    });
    const body = {
      message: commitMessage,
      content: this.encodeToBase64(fileContent),
    };

    return this.http.put(url, body, { headers });
  }

  // Зчитати файл із репозиторію
  getFile(filePath: string): Observable<any> {
    const url = `${this.apiUrl}${filePath}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get(url, { headers });
  }
}
