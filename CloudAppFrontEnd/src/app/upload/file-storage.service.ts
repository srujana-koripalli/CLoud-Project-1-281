import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileStorageService {

  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);

    console.log('API Url: ' + environment.apiUrl);

    const req = new HttpRequest('POST', environment.apiUrl + '/api/file/upload', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(environment.apiUrl + '/api/file/all');
  }

  deleteFileFromStorage(key: string): Observable<any> {
    console.log('API Url: ' + environment.apiUrl);
    return this.http.post(environment.apiUrl + '/api/file/delete/' + key, null);
  }
}
