package com.cloudtech.project.app.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cloudtech.project.app.services.CloudTechAppS3Service;
 
@CrossOrigin(origins = "${frontend.url}")
@RestController
public class CloudTechAppUploadFileController {
	
	@Autowired
	CloudTechAppS3Service s3Services;
	
    @PostMapping("/api/file/upload")
    public String uploadObjectInS3(@RequestParam("file") MultipartFile file) {
    	String keyName = file.getOriginalFilename();
		s3Services.uploadFile(keyName, file);
		return "Upload Successfully -> KeyName = " + keyName;
    }    
}