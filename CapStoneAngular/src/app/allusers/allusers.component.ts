
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  allUsers = [];
  constructor(private ser:MyserviceService) { }

  //Get all the users on component load
  ngOnInit(): void {
    var temp = this.ser.getAllUsers().subscribe((data)=>{
      this.allUsers=Array.from(Object.keys(data), i=>data[i]);
    });
  }

}