import { Component, OnInit } from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router';

import { School } from '../shared/school';

import { GetinfoService } from '../services/getinfo.service';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-schooldetail',
  templateUrl: './schooldetail.component.html',
  styleUrls: ['./schooldetail.component.css']
})
export class SchooldetailComponent implements OnInit {

  school: School;
  schoolId: number [];

  constructor(private info: GetinfoService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.info.getSchoolIds()
    .subscribe(ids => this.schoolId = ids);

    this.route.params
    .switchMap((params: Params) => this.info.getSchool(+params['id']))
    .subscribe(school => this.school = school);

    console.log(this.school);
  }

}
