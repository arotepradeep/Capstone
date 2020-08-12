import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MyserviceService } from './myservice.service';
import { FilterPipe } from './filter-pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'CapStone';
  isLogin: boolean = false;
  isMgt: boolean = false;
  isHR: boolean = false;
  isEmp: boolean = false;

  
  constructor(router:Router) {
    router.navigate(['/home']);
  }

  ngOnInit() {
  }
  
}
