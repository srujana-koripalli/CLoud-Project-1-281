import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FileDetailsComponent } from './upload/file-details/file-details.component';
import { FileUploadFormComponent } from './upload/fileupload-form/fileupload-form.component';
import { UploadFileListComponent } from './upload/upload-file-list/upload-file-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FileDetailsComponent,
    FileUploadFormComponent,
    UploadFileListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
