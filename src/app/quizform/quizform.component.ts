import { Component, OnInit } from '@angular/core';
import { NgSwitch } from '@angular/common';

import {ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { Params, ActivatedRoute } from '@angular/router';
import { GetinfoService } from '../services/getinfo.service';


@Component({
  selector: 'app-quizform',
  templateUrl: './quizform.component.html',
  styleUrls: ['./quizform.component.css']
})
export class QuizformComponent implements OnInit {

  quest = [];
  questProp;
  form: FormGroup;

  constructor( private route: ActivatedRoute, private info: GetinfoService, private fb: FormBuilder) { }

  ngOnInit() {
    if (this.route.snapshot.params.quiz === 'SCI01' || 'SCI02' || 'SCI03') {
this.info.getSciQuest()
.subscribe( quest => this.quest = quest);
console.log(this.quest);
this.questProp = Object.keys(this.quest)
.map(prop => {
  return Object.assign({}, {key: prop}, this.quest[prop]);
});
    }else if (this.route.snapshot.params.quiz[0] === 'M') {
      this.info.getMathQuest()
      .subscribe( quest => this.quest = quest);
      console.log(this.quest);
      this.questProp = Object.keys(this.quest)
      .map(prop => {
        return Object.assign({}, {key: prop}, this.quest[prop]);
      });
    }
console.log(this.route.snapshot.params.quiz);

console.log(this.questProp);
const formGroup = {};
for (let prop of Object.keys(this.quest)) {
  formGroup[prop] = new FormControl(this.quest[prop].value || '', this.mapValidators(this.quest[prop].validation));
}

this.form = new FormGroup(formGroup);
}

private mapValidators(validators) {
  const formValidators = [];

  if  (validators) {
    for (const validation of Object.keys(validators)) {
      if (validation === 'required') {
        formValidators.push(Validators.required);
      } else if (validation === 'min') {
        formValidators.push(Validators.min(validators[validation]));
      }
    }
  }

  return formValidators;
}
onSubmit(form) {
  console.log(form);
}
}


