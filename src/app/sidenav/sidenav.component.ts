import { Component, OnInit } from '@angular/core';

import { School } from '../shared/school';



 import { SCHOOLS } from '../shared/schools';

import { GetinfoService } from '../services/getinfo.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  schools = SCHOOLS;
  names: School[];

  constructor(private info: GetinfoService) { }

  ngOnInit() {

    this.info.getSchools()
     .subscribe(schools => this.schools = schools);
     this.names = this.schools;
  }

}
