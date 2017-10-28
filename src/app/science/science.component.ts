import { Component, OnInit } from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router';

import { Quiz } from '../shared/quiz';
import { SciQuiz } from '../shared/sciquizes';

import { MathQuiz } from '../shared/mathquiz';

import { GetinfoService } from '../services/getinfo.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  constructor( private route: ActivatedRoute, private info: GetinfoService) { }

  name= '';
  quizName: Quiz[];
selectItems: Quiz[];

ngOnInit() {

    this.name = this.route.snapshot.params.name;
    if (this.name === 'science') {
        this.info.getSciQuiz().subscribe(quizName => this.quizName = quizName);
        this.selectItems = this.quizName;
    }else {
      this.info.getMathQuiz().subscribe(quizName => this.quizName = quizName);
      this.selectItems = this.quizName;
    }

    console.log(this.selectItems);
  }

}
