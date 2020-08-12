
import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { CompPolicy } from '../comp-policy';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-viewpolicy',
  templateUrl: './viewpolicy.component.html',
  styleUrls: ['./viewpolicy.component.css']
})
export class ViewpolicyComponent implements OnInit {
  // Variable used on html page
  pl: CompPolicy = new CompPolicy();
  fileUrl;

  constructor(private ser: MyserviceService,
              private sanitizer: DomSanitizer) { }

  //Diaplay one policy selected on policy list for display or download              
  ngOnInit(): void {
    this.pl = this.ser.getP();    
    const data = this.pl.policyDoc;
    const blob = new Blob([data], { type: 'application/octet-stream' });
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }

}
