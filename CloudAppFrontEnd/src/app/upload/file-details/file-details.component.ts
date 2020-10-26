import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FileStorageService } from '../file-storage.service';

@Component({
  selector: 'file-details',
  templateUrl: './file-details.component.html',
  styleUrls: ['./file-details.component.css']
})
export class FileDetailsComponent implements OnInit {

  @Input() fileUpload: string;
  url: string;

  constructor(private fileStorageService: FileStorageService) { 
    this.url = environment.apiUrl;
  }

  ngOnInit() {
  }

  deleteFile(key: string) {
    this.fileStorageService.deleteFileFromStorage(key);
  }

}
