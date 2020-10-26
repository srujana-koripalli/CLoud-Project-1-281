import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileStorageService } from '../file-storage.service';

@Component({
  selector: 'upload-file-list',
  templateUrl: './upload-file-list.component.html',
  styleUrls: ['./upload-file-list.component.css']
})
export class UploadFileListComponent implements OnInit {

  showFile = false;
  fileUploads: Observable<string[]>;

  constructor(private fileStorageService: FileStorageService) { }

  ngOnInit() {
  }

  showFiles(enable: boolean) {
    this.showFile = enable;

    if (enable) {
      this.fileUploads = this.fileStorageService.getFiles();
    }
  }
}
