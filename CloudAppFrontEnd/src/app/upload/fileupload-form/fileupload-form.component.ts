import { Component, OnInit } from '@angular/core';
import { FileStorageService } from '../file-storage.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'fileupload-form',
  templateUrl: './fileupload-form.component.html',
  styleUrls: ['./fileupload-form.component.css']
})
export class FileUploadFormComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
  /**progress: { percentage: number } = { percentage: 0 };*/

  constructor(private fileStorageService: FileStorageService) { }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    /**this.progress.percentage = 0;*/

    this.currentFileUpload = this.selectedFiles.item(0);
    this.fileStorageService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
     /** if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }*/
    });

    this.selectedFiles = undefined;
  }

}
